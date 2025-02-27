<template>
    <div class="container">


        <div class="row">
            <Header></Header>
        </div>


        <div class="row d-flex align-item-center justify-content-center mt-5">
            <PaymentForm></PaymentForm>
        </div>


    </div>
    <Footer></Footer>

</template>

<script>

import Footer from '../includes/Footer.vue';
import Header from '../includes/Header.vue';
import PaymentForm from './payment-form.vue';

export default {
    name: 'Payment',

    components: {
        Header,
        Footer,
        PaymentForm,
    },
}
</script>
