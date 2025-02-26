<template>
    <div v-for="item in catogory" :key="item.id" class="col-lg-3 col-sm-12 ">
        <div id="category-item" class="card shadow-lg mb-5" style="width: 18rem;">
            <img class="card-img-top" :src="item.image" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ item.desc }}</p>
                <p class="card-text ">{{ item.Seller }}</p>
                <a href="#" class="btn btn-primary">View More <i class="bi bi-eye"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'CategoryItem',

    data() {
        return {
            catogory: [],
        }
    },

    async mounted() {
        let result = await axios.get('http://localhost:3000/category');
        this.catogory = result.data;
    }
}
</script>

<style>
img {
    width: 100px;
    height: 300px;
}

</style>
