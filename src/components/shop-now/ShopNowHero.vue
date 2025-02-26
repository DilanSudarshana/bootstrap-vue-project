<template>
    <div id="plant-hero" class="col-lg-12 bg-light p-5 shadow-lg text-light">
        <h1 class="pt-5 text-light">Discover....</h1>
        <p class="pb-5 text-light">We help customers in the world’s most essential industries solve the biggest
            challenges of modern life.</p>

        <SearchBar></SearchBar>
    </div>
</template>

<script>
import SearchBar from './Search-bar.vue';

export default {
    name: 'ShopNowHero',
    components: {
        SearchBar,
    }

}
</script>

<style>
#plant-hero {
    background-image: url('https://img.freepik.com/premium-photo/black-board-with-black-background-with-pot-cactus_916191-383572.jpg?w=1380');
}
</style>
