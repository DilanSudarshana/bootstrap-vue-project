<template>
    <div class="col-lg-6 bg-light p-5 rounded">
        <form>
            <h5 class="mb-5"><i class="bi bi-headset"></i> Contact Us</h5>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Phone Number</label>
                <input type="text" class="form-control" id="phone" />
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Message</label>
                <input type="text-area" class="form-control" id="message" />
            </div>
            <button type="button" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>

export default {
    name: 'ContactForm',

}
</script>
