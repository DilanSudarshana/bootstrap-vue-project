<template>
    <div class="bg-dark p-3 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

            <router-link to="/" class="text-decoration-none">
                <li><a href="#" class="nav-link px-2 text-white">Home</a></li>
            </router-link>

            <router-link to="/plants" class="text-decoration-none">
                <li><a href="#" class="nav-link px-2 text-white">Plants</a></li>
            </router-link>

            <router-link to="/shop-now" class="text-decoration-none">
                <li><a href="#" class="nav-link px-2 text-white">Shop Now</a></li>
            </router-link>

            <router-link to="/contact-us" class="text-decoration-none">
                <li><a href="#" class="nav-link px-2 text-white">Contact</a></li>
            </router-link>

            <router-link to="/about-us" class="text-decoration-none">
                <li><a href="#" class="nav-link px-2 text-white">About</a></li>
            </router-link>

        </ul>

        <div class="text-end">
            <router-link to="/login"><button type="button"
                    class="btn btn-outline-light me-2">Login</button></router-link>
            <router-link to="/sign-up"><button type="button" class="btn btn-warning">Sign-up</button></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>