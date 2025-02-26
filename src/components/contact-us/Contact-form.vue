<template>
    <div class="col-lg-6 bg-light p-5 rounded">
        <form>
            <h5 class="mb-5"><i class="bi bi-headset"></i> Contact Us</h5>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" v-model="name" class="form-control" id="email" aria-describedby="emailHelp" />
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Phone Number</label>
                <input type="text" v-model="email" class="form-control" id="phone" />
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Message</label>
                <input type="text-area" v-model="message" class="form-control" id="message" />
            </div>
            <button v-on:click="SendInquary" type="button" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ContactForm',

    data() {
        return {
            name: '',
            phone: '',
            message: ''
        }
    },
    methods: {

        async SendInquary() {
            let result = await axios.post("http://localhost:3000/contacts", {
                email: this.name,
                phone: this.phone,
                message: this.message
            });

            if (result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data))
                alert('Thank you. We will contact you soon.')
            }
        }
    },

}
</script>
