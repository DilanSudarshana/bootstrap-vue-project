<template>

    <Header></Header>

    <div class="container shadow-sm mb-5">
        <div class="row">
            <AboutHero></AboutHero>
        </div>
    </div>

    <Footer></Footer>

</template>

<script>
import Footer from '../includes/Footer.vue';
import Header from '../includes/Header.vue';
import AboutHero from './AboutHero.vue';


export default {
    name: 'About',

    components: {
        Header,
        Footer,
        AboutHero,
    },

}
</script>
