<template>
    <Header></Header>

    <div class="container mt-5 mb-5 px-5">

        <div class="row mt-5 mb-5">
            <h2 class="text-center">Plant Pots</h2>
        </div>

        <div id="items" class="row">
            <div class="col-lg-3 col-sm-12 mb-5">
                <PlantItem></PlantItem>
            </div>
        </div>
    </div>


    <Footer></Footer>

</template>

<script>
import Footer from '../includes/Footer.vue';
import Header from '../includes/Header.vue';
import PlantItem from './Plant-item.vue';

export default {
    name: 'Plants',

    components: {
        Header,
        Footer,
        PlantItem,
    },
}
</script>

<style>
#items{
    display: flex;
    justify-content: center;
    flex-direction: column;
}
</style>