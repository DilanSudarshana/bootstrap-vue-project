<template>

    <div class="container">
        <div class="row">
            <Header></Header>
        </div>
        <div class="row">
           <ShopViewHero></ShopViewHero>
        </div>

    </div>
    <Footer></Footer>

</template>

<script>
import Footer from '../includes/Footer.vue';
import Header from '../includes/Header.vue';
import ShopViewHero from '../shop-now-details/ShopViewHero.vue';

export default {
    name: 'ShopNowView',

    components: {
        Header,
        Footer,
        ShopViewHero,
    },

    data() {
        return {
            plants: [],
        }
    },
}
</script>
