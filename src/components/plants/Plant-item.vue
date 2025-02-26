<template>
    <div v-for="item in plants" :key="item.id" class="col-lg-3 col-sm-12">
        <div  class="card shadow-lg mb-5" style="width: 18rem;">
            <img class="card-img-top"
                src="https://www.marthastewart.com/thmb/Gt3EKxaUS8T1WzoSVAmd4UGSFTo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/low-light-houseplants-snake-plant-hero-getty-1123-bb1e9fd1b2024e879a45c3e6bbd9fcfe.jpg"
                alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ item.desc }}</p>
                <a href="#" class="btn btn-primary">{{ item.price }}</a>
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
    }

}
</script>
