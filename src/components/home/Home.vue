<template>
    <Header></Header>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <Hero></Hero>
            </div>
        </div>
        <div class="row px-5">
            <PlantItem></PlantItem>
        </div>
    </div>
    <Footer></Footer>

</template>

<script>
import Footer from '../includes/Footer.vue';
import Header from '../includes/Header.vue';
import Hero from './Hero.vue';
import PlantItem from '../plants/Plant-item.vue';


export default {
    name: 'Home',

    components: {
        Header,
        Footer,
        Hero,
        PlantItem,
    },
}
</script>
