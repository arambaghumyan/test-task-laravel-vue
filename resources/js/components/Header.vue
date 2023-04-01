<template>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link :to="{name: 'home'}" class="navbar-brand">
                Navbar
            </router-link>
            <div v-if="auth" class="d-flex justify-content-start">
                <button @click="logout" class="btn btn-outline-light me-2" type="button">Log out</button>
            </div>
            <div v-else class="d-flex justify-content-start">
                <router-link class="btn btn-outline-light me-2" :to="{name: 'login'}">Sign in</router-link>
                <router-link class="btn btn-light me-2" :to="{name: 'signup'}">Sign up</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Header",
    computed: {
        auth() {
            return this.$store.getters.GET_AUTH
        }
    },
    methods: {
        async logout() {
            let response = await this.$store.dispatch('logout')
            if (response.success) this.$router.push({name: 'login'})
        }
    }
}
</script>
