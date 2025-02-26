<template>
    <Header></Header>
    <div class="container">
        <div class="row d-flex justify-content-center align-item-center">
            <div class="col-lg-6">

                <h2 class="text-center p-4 m-4">
                    Login Here
                </h2>

                <div class="mb-5 shadow-none p-3 mb-5 bg-light rounded">

                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" v-model="email" class="form-control" placeholder="Enter email">

                    </div>
                    <div class="form-group mb-5">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" v-model="password" class="form-control" placeholder="Password">
                    </div>
                    <button v-on:click="login" class="btn btn-primary">Login</button>

                </div>

            </div>
        </div>
    </div>

    <Footer></Footer>
</template>

<script>
import Footer from '../includes/Footer.vue';
import Header from '../includes/Header.vue';
import axios from 'axios';

export default {
    name: 'Login',

    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        async login() {
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )

            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({ name: 'Home' })
                console.log('Login sucesss')
            } else {
                alert('error login')
            }
        }
    },

    components: {
        Header,
        Footer
    },
}
</script>