<template>
    <div>
        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#productCreateModal">
            Add Product
        </button>

        <!-- Modal -->
        <div class="modal fade" id="productCreateModal" tabindex="-1" aria-labelledby="productCreateModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="productCreateModalLabel">Create Product</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex flex-column gap-3">
                        <div class="row">
                            <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                                <input v-model="productData.name" type="text" class="form-control" id="inputName">
                            </div>
                        </div>
                        <div class="row">
                            <label for="price" class="col-sm-2 col-form-label">Price</label>
                            <div class="col-sm-10">
                                <input v-model="productData.price" v-mask="'$###,###.##'" type="text" class="form-control" id="price">
                            </div>
                        </div>
                        <div class="row">
                            <label for="count" class="col-sm-2 col-form-label">Count</label>
                            <div class="col-sm-10">
                                <input v-model="productData.count" type="number" class="form-control" id="count">
                            </div>
                        </div>
                        <div class="row">
                            <label for="color" class="col-sm-2 col-form-label">Color</label>
                            <div class="col-sm-10">
                                <select class="form-control" v-model="productData.options.color" name="color" id="color">
                                    <option v-for="color in filterColor" :value="color">{{color}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <label for="weight" class="col-sm-2 col-form-label">Weight</label>
                            <div class="col-sm-10">
                                <input v-model="productData.options.weight" type="number" class="form-control" id="weight">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button ref="closeBtn" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button @click="save" type="button" class="btn btn-primary">Create</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {VueMaskDirective} from 'v-mask'
export default {
    name: "ProductCreate",
    directives: {mask: VueMaskDirective},
    data() {
        return {
            productData: {
                name: null,
                price: null,
                count: null,
                options: {
                    color: null,
                    weight: null,
                }
            }
        }
    },
    computed: {
        filterColor() {
            return this.$store.getters.GET_FILTER_COLORS
        }
    },
    methods: {
        async save() {
            let response = await this.$store.dispatch('store', this.productData)
            if (response) {
                Vue.swal({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Created',
                    showConfirmButton: false,
                    timer: 1500
                });
                this.$refs.closeBtn.click()
            }
        }
    }
}
</script>
