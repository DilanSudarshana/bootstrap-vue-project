<template>
    <Header></Header>
    <div class="section-padding p-5 m-5">
        <div class="container">

            <div class="row">
                <h2 class="text-center">Plant Pots</h2>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <PlantItem></PlantItem>
                </div>
                <div class="col-md-4">
                    <PlantItem></PlantItem>
                </div>
                <div class="col-md-4">
                    <PlantItem></PlantItem>
                </div>

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
