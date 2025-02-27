<template>

    <div class="container">

        <div class="row">
            <Header></Header>
        </div>

        <div class="row">
            <ShopViewHero></ShopViewHero>
        </div>

        <div class="row mt-5">
            <h5><i class="bi bi-tree-fill"></i> {{ catogotyName }}</h5>
        </div>


        <div class="row mt-5 overflow-x-scroll">
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
            catogotyName: '',
        }
    },
    mounted() {
        let id = this.$route.params.id

        console.log(id);
        if (id == 1) {
            this.catogotyName = "Indoor Plants"
        } else if (id == 2) {
            this.catogotyName = "Out Door Plants"
        } else if (id == 3) {
            this.catogotyName = "Money-Plants"
        } else {
            this.catogotyName = "Vegitable Plants"
        }
    }
}
</script>
