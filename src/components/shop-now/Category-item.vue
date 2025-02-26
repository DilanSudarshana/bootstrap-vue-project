<template>
    <div v-for="item in catogory" :key="item.id" class="col-lg-4">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top"
                src="https://img.freepik.com/free-photo/pepper-face-plant-small-pot_53876-94408.jpg?t=st=1740555219~exp=1740558819~hmac=316a1e2259b6706ff9c81f850fd05326beb88f5dd9e9f7dfacd5c3cbde17c7ce&w=900"
                alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Seller Name</li>
            </ul>
            <div class="card-body">
                <a href="#" class="btn btn-primary">Go somewhere</a>
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
