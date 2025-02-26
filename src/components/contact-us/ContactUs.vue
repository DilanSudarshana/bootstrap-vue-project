<template>


    <div class="container shadow-sm mb-5">
        <div class="row">
            <Header></Header>
        </div>
        <div class="row">
            <ContactHero></ContactHero>
        </div>
    </div>

    <h2 class="mt-5 text-center">Contact US</h2>
    <div class="container mt-5 rouded shadow-sm mb-5">
        <div class="row">
            <ContactForm></ContactForm>
            <ContactDesc></ContactDesc>

        </div>
    </div>

    <Footer></Footer>

</template>

<script>
import Footer from '../includes/Footer.vue';
import Header from '../includes/Header.vue';
import ContactForm from './Contact-form.vue';
import ContactDesc from './Contact-Desc.vue';
import ContactHero from './Contact-Hero.vue';


export default {
    name: 'ContactUs',

    components: {
        Header,
        Footer,
        ContactForm,
        ContactDesc,
        ContactHero,
    },

}
</script>
