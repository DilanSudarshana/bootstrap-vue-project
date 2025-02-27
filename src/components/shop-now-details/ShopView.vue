<template>

    <div class="container">

        <div class="row">
            <Header></Header>
        </div>

        <div class="row">
            <ShopViewHero></ShopViewHero>
        </div>

        <div class="row mt-5">
            <PlantItem></PlantItem>
        </div>

    </div>

    <Footer></Footer>

</template>

<script>
import Footer from '../includes/Footer.vue';
import Header from '../includes/Header.vue';
import ShopViewHero from '../shop-now-details/ShopViewHero.vue';
import PlantItem from './PlantItem.vue';

export default {
    name: 'ShopNowView',

    components: {
        Header,
        Footer,
        ShopViewHero,
        PlantItem,
    },

    data() {
        return {
            plants: [],
        }
    },
}
</script>
