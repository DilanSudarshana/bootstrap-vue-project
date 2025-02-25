<template>
    <div class="bg-dark p-2 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" class="nav-link px-2 text-white">Home</a></li>
            <li><a href="#" class="nav-link px-2 text-white">Plants</a></li>
            <li><a href="#" class="nav-link px-2 text-white">Shop Now</a></li>
            <li><a href="#" class="nav-link px-2 text-white">Contact</a></li>
            <li><a href="#" class="nav-link px-2 text-white">About</a></li>
        </ul>

        <div class="text-end">
            <router-link to="/login"><button type="button"
                    class="btn btn-outline-light me-2">Login</button></router-link>
            <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>