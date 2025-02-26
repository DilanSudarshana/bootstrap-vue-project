<template>
    <Header></Header>
    <div class="container">
        <div class="row d-flex justify-content-center align-item-center">
            <div class="col-lg-6">

                <h2 class="text-center p-4 m-4">
                    Sign Up
                </h2>

                <div class="mb-5 shadow-none p-3 mb-5 bg-light rounded">
                    <form>
                        <div class="form-group">
                            <label>Name</label>
                            <input v-model="name" type="text" class="form-control" placeholder="Enter Name"
                                autocomplete="username">
                        </div>
                        <div class="form-group">
                            <label>Email address</label>
                            <input v-model="email" type="email" class="form-control" placeholder="Enter email"
                                autocomplete="email">
                        </div>
                        <div class="form-group mb-5">
                            <label>Password</label>
                            <input v-model="password" type="password" class="form-control" placeholder="Password"
                                autocomplete="current-password">
                        </div>
                        <button v-on:click="register" class="btn btn-primary">Sign Up</button>
                    </form>
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
    name: 'Register',

    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },

    components: {
        Header,
        Footer
    },
    methods: {
        async register() {

            let result = await axios.post("http://localhost:3000/users", {
                name: this.name,
                password: this.password,
                email: this.email
            });

            if (result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({ name: 'Home' })
            } else {
                console.log('error')
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({ name: 'Home' })
        }
    }
}
</script>