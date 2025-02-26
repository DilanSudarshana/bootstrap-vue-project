<template>
    <Header></Header>

    <div class="container mt-5 mb-5 px-5">

        <div class="row mt-5 mb-5">
            <SearchBar></SearchBar>
        </div>

        <div class="row mt-5 mb-5 px-5">
            <CategoryItem></CategoryItem>
        </div>

    </div>


    <Footer></Footer>

</template>

<script>
import Footer from '../includes/Footer.vue';
import Header from '../includes/Header.vue';
import SearchBar from './Search-bar.vue';
import CategoryItem from './Category-item.vue';

export default {
    name: 'ShopNow',

    components: {
        Header,
        Footer,
        SearchBar,
        CategoryItem,
    },
}
</script>
