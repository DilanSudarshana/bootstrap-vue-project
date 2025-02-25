<template>
    <Header></Header>
    <div class="section-padding p-5 m-5">
        <h1 class="p-5 mt-5">Welcome to Plant Store</h1>
    </div>
    <Footer></Footer>

</template>

<script>
import Footer from '../includes/Footer.vue';
import Header from '../includes/Header.vue';
export default {
    name: 'Home',

    components: {
        Header,
        Footer
    },
}
</script>
