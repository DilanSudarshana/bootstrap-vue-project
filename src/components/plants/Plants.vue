<template>

    <div class="container mb-5">
        <div class="row">
            <Header></Header>
        </div>
        <div class="row">
            <PlantsHero></PlantsHero>
        </div>
        <div class="row mt-5 mb-5">
            <h2 class="text-center">Indoor Plant</h2>
        </div>

        <div class="row">
            <PlantItem></PlantItem>
        </div>
    </div>


    <Footer></Footer>

</template>

<script>
import Footer from '../includes/Footer.vue';
import Header from '../includes/Header.vue';
import PlantItem from './Plant-item.vue';
import PlantsHero from './Plants-hero.vue';


export default {
    name: 'Plants',

    components: {
        Header,
        Footer,
        PlantItem,
        PlantsHero,
    },
}
</script>
