<template>
    <div class="container bg-warning p-5 mb-5 shadow-lg" id="hero-section">
        <div class="row">
            <div class="col-lg-12 col-sm-12">
                <h4 class="pt-5">Trade-in-offer</h4>
                <h2>Super value deals</h2>
                <h1>On all products</h1>
                <p>Save more with coupons & up to 70% off</p>
                <a href="">
                    <router-link to="/plants" class="text-decoration-none"><button
                            class="border-0 p-2 bg-success rounded text-light">
                            Shop Now
                        </button></router-link>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero',
}
</script>

<style>
#hero-section{
    background-image: url('https://img.freepik.com/free-photo/fresh-green-leaves-decorate-modern-wooden-plant-shelf-generated-by-artificial-intelligence_188544-113224.jpg?t=st=1740547062~exp=1740550662~hmac=2bf29070c946656c50e32515c57c2b62877ede0ad9d7d92cfd8ffaaa7699bd42&w=1800');
    background-repeat: no-repeat;
    height: 70vh;
}
</style>
