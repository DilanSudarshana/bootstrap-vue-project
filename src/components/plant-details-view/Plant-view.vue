<template>

    <div class="container">
        <div class="row">
            <Header></Header>
        </div>

        <div class="row px-5 mt-2 mb-5 d-flex align-item-center justify-content-center">
            <div class="col-md-6">
                <div class="jumbotron mt-5 mb-5 bg-light p-5 rounded shadow-lg">
                    <h1 class="display-4">{{ plants.title }}</h1>
                    <img class="mt-2 mb-2" style="width: 100%;height: 60vh;"
                        src="https://img.freepik.com/free-photo/african-mask-plant-rattan-basket_53876-110290.jpg?t=st=1740593114~exp=1740596714~hmac=2db64f15a24befb5b35bb5661dacc6548ce7367cde56a7bdd5fa9ff00a836762&w=740"
                        alt="">
                    <p class="lead">{{ plants.desc }}</p>
                    <hr class="my-4">
                    <p>
                        Seller: <span class="badge badge-success bg-success">{{ plants.Seller }}</span>
                    </p>
                    <p>
                        Price: <span class="badge badge-success bg-success">{{ plants.price }}</span>
                    </p>
                    <p class="lead mt-4">
                        <router-link :to="'/payment/' + plants.id"> <a class="btn btn-primary btn-sm"
                                role="button">Buy Now <i class="bi bi-bag-plus"></i></a></router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>

</template>

<script>
import Footer from '../includes/Footer.vue';
import Header from '../includes/Header.vue';
import axios from 'axios';

export default {
    name: 'PlantDetailsView',

    components: {
        Header,
        Footer,
    },

    data() {
        return {
            plants: [],
        }
    },

    async mounted() {
        let id = this.$route.params.id
        let result = await axios.get(`http://localhost:3000/plants/${id}`);
        this.plants = result.data;
    }

}
</script>
