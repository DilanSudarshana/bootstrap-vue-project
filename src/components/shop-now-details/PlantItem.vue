<template>

    <div class="row overflow-x-scroll d-flex flex-nowrap flex-row overflow-hidden">
        <div v-for="item in plants" :key="item.id" class="col-lg-3 col-sm-12">
            <div class="card mb-5" style="width: 18rem;">
                <img class="card-img-top"
                    src="https://www.marthastewart.com/thmb/Gt3EKxaUS8T1WzoSVAmd4UGSFTo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/low-light-houseplants-snake-plant-hero-getty-1123-bb1e9fd1b2024e879a45c3e6bbd9fcfe.jpg"
                    alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p class="card-text">{{ item.desc }}</p>
                    <router-link :to="'/payment/' + item.id"><a href="#" class="btn btn-primary">Buy Now <i
                                class="bi bi-cart-plus"></i></a></router-link>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'PlantItem',

    data() {
        return {
            plants: [],
        }
    },
    async mounted() {
        let result = await axios.get('http://localhost:3000/plants');
        this.plants = result.data;

        // let id = this.$route.params.id
        // console.log(result)
        // console.log(result.data.categoryType)

        // if (result.data.categoryType === 1) {
           
        //     this.plants = result.data;
        //     console.log(plants.data)
        // }

    }

}
</script>
