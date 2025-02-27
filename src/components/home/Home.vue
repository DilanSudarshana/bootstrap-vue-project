<template>

    <div class="container">

        <div class="row">
            <Header></Header>
        </div>

        <div class="row">
            <Hero></Hero>
        </div>

        <div class="row py-5">
            <DetailsImages></DetailsImages>
        </div>

        <div class="row bg-light p-5 shadow-lg">
            <h5 class="mb-3">Plant Pots</h5>
            <PlantItem></PlantItem>
        </div>


        <div class="row mt-5 shadow-lg mb-5">
            <AboutHero></AboutHero>
        </div>


    </div>
    <Footer></Footer>
</template>

<script>
import Footer from '../includes/Footer.vue';
import Header from '../includes/Header.vue';
import Hero from './Hero.vue';
import PlantItem from '../shop-now-details/PlantItem.vue';
import DetailsImages from './DetailImage.vue';
import AboutHero from '../about-us/AboutHero.vue';


export default {
    name: 'Home',

    components: {
        Header,
        Footer,
        Hero,
        PlantItem,
        DetailsImages,
        AboutHero,
    },
}
</script>
