<template>
    <Header></Header>
    <div class="container">
        <div class="row d-flex justify-content-center align-item-center">
            <div class="col-lg-6">

                <h1 class="text-center p-5 m-5">
                    Login Here
                </h1>

                <div class="mb-5 shadow-none p-3 mb-5 bg-light rounded">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Enter email">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                                else.</small>
                        </div>
                        <div class="form-group mb-5">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"
                                placeholder="Password">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
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

export default {
    name: 'Login',

    components: {
        Header,
        Footer
    },
}
</script>