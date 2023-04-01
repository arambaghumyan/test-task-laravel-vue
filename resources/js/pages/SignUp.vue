<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-12 col-md-6">
                <div class="row g-3">
                    <div class="col-md-6">
                        <label for="firstname" class="form-label">First name</label>
                        <input v-model="signupData.name" id="firstname" type="text" class="form-control" aria-label="First name">
                    </div>
                    <div class="col-md-6">
                        <label for="lastname" class="form-label">Last name</label>
                        <input v-model="signupData.lastName" id="lastname" type="text" class="form-control" aria-label="Last name">
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail" class="form-label">Email</label>
                        <input v-model="signupData.email" type="email" class="form-control" id="inputEmail">
                    </div>
                    <div class="col-md-6">
                        <label for="phone" class="form-label">Phone</label>
                        <input v-model="signupData.phone" v-mask="'+7 (###) ###-####'" type="email" class="form-control" id="phone">
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword" class="form-label">Password</label>
                        <input v-model="signupData.password" type="password" class="form-control" id="inputPassword">
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Password Confirmation</label>
                        <input v-model="signupData.password_confirmation" type="password" class="form-control" id="inputPassword4">
                    </div>
                    <div class="col-12">
                        <button @click="signUp" class="btn btn-primary">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {VueMaskDirective} from 'v-mask'
export default {
    name: "SignUp",
    directives: { mask: VueMaskDirective },
    data() {
        return {
            signupData: {
                name: '',
                lastName: '',
                email: '',
                phone: '',
                password: '',
                password_confirmation: ''
            }
        }
    },
    methods: {
        async signUp() {
            const {data} = await this.$store.dispatch('create', this.signupData)
            if (data) this.$router.push({name: 'home'})
        }
    }
}
</script>
