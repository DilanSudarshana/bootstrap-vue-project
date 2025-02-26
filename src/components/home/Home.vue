<template>
    <Header></Header>
    <div class="container">
        <div class="row py-5">
            <div class="col-md-12">
                <Hero></Hero>
            </div>
        </div>
    </div>
    <Footer></Footer>

</template>

<script>
import Footer from '../includes/Footer.vue';
import Header from '../includes/Header.vue';
import Hero from './Hero.vue';
export default {
    name: 'Home',

    components: {
        Header,
        Footer,
        Hero
    },
}
</script>
