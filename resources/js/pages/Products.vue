<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <ProductCreate/>
            </div>
            <div class="col-12 mt-4">
                <div class="input-group mb-3">
                    <input type="text" v-model="filterOptions.searchQuery" placeholder="Search" class="form-control">
                    <button @click="getProducts" class="input-group-text">Search</button>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-12 col-md-4">
                    <select v-model="filterOptions.color" multiple class="form-control" name="colorFilter">
                        <option v-for="color in filterColor" :value="color">{{color}}</option>
                    </select>
                </div>
                <div class="col-12 col-md-4">
                    <input class="form-control" type="number" name="filterWeight" v-model="filterOptions.weight">
                </div>
            </div>
            <template v-if="products.length">
                <div v-for="product in products" class="col-12 col-md-6 col-lg-3 mt-3">
                    <div class="card">
                        <button @click="destroy(product.id)" class="btn btn-danger remove">
                            <Trash color="white"/>
                        </button>
                        <div class="card-body">
                            <h5 class="card-title">{{ product.name }} {{product.price}}</h5>
                            <p class="card-text"><strong>Weight: </strong>{{ product.weight }}</p>
                            <div class="product-color" :style="`background-color: ${product.color}`"></div>
                            <span><strong>Count:</strong> {{product.count}}</span>
                        </div>
                    </div>
                </div>
            </template>
            <div v-else class="mt-4">
                <p class="text-center">No Data</p>
            </div>
            <div v-if="meta.last_page > 1" class="col-12 mt-4">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li v-for="page in meta.last_page"
                            :class="page == selectedPage && 'active'"
                            class="page-item">
                            <a role="button" @click="getProducts(page)" class="page-link">{{ page }}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Products",
    components: {
        'ProductCreate': () => import('../components/modals/ProductCreate'),
        'Trash': () => import('../components/icons/Trash')
    },
    data() {
        return {
            selectedPage: 1,
            filterOptions: {
                searchQuery: this.$route.query.searchQuery || '',
                color: Array.isArray(this.$route.query.color) ? this.$route.query.color : this.$route.query.color ? [this.$route.query.color] : [],
                weight: this.$route.query.weight || null
            }
        }
    },
    computed: {
        products() {
            return this.$store.getters.GET_PRODUCTS
        },
        meta() {
            return this.$store.getters.GET_META
        },
        filterColor() {
            return this.$store.getters.GET_FILTER_COLORS
        }
    },
    methods: {
        getProducts(page = 1) {
            this.selectedPage = page
            if (JSON.stringify(this.$route.query) !== JSON.stringify(this.filterOptions)) this.$router.replace({ query: this.filterOptions })
            this.$store.dispatch('getProducts', {
                params: {
                    page: this.selectedPage,
                    filter: this.filterOptions
                }
            })
        },
        destroy(id) {
            this.$store.dispatch('destroy', id)
        }
    },
    created() {
        this.getProducts()
    }
}
</script>

<style lang="scss" scoped>
.card {
    .product-color {
        width: 30px;
        height: 30px;
        border-radius: 100px;
    }
    &:hover {
        .remove {
            display: block;
        }
    }

    .remove {
        position: absolute;
        display: none;
        right: 0;
        top: 0
    }
}
</style>
