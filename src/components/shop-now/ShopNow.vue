<template>

    <div class="container mb-5">
        <div class="row">
            <Header></Header>
        </div>
        <div class="row">
            <ShopNowHero></ShopNowHero>
        </div>
        <div class="row mt-5">
            <CategoryItem></CategoryItem>
        </div>

    </div>


    <Footer></Footer>

</template>

<script>
import Footer from '../includes/Footer.vue';
import Header from '../includes/Header.vue';
import CategoryItem from './Category-item.vue';
import ShopNowHero from './ShopNowHero.vue';

export default {
    name: 'ShopNow',

    components: {
        Header,
        Footer,
        CategoryItem,
        ShopNowHero,
    },
}
</script>
