<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-12 col-md-6">
                <div>
                    <div class="row mb-3">
                        <span class="col-sm-2 col-form-label d-flex gap-2">
                            <a :class="{'fw-bold': loginType === 'email'}" @click="changeLoginType('email')" role="button">Email</a> / <a @click="changeLoginType('phone')" :class="{'fw-bold': loginType === 'phone'}" role="button">Phone</a>
                        </span>
                        <div class="col-sm-10">
                            <input v-model="loginData[loginType]" v-mask="phoneMask" type="email" class="form-control">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input v-model="loginData.password" type="password" class="form-control" id="inputPassword3">
                        </div>
                    </div>
                    <button @click="login" class="btn btn-primary">Sign in</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {VueMaskDirective} from 'v-mask'
export default {
    name: "Login",
    directives: { mask: VueMaskDirective },
    data() {
        return {
            loginData: {
                email: '',
                phone: '',
                password: ''
            },
            loginType: 'email'
        }
    },
    computed: {
        phoneMask() {
            return this.loginType === 'phone' ? '+7 (###) ###-####' : ''
        }
    },
    methods: {
        changeLoginType(type) {
            this.loginData.email = this.loginData.phone = ''
            this.loginType = type
        },
        async login() {
            let {data} = await this.$store.dispatch('login', this.loginData)
            if (data) this.$router.push({name: 'home'})
        }
    }
}
</script>
