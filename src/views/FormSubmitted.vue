<template>
    <div class="submitted">
        <h1>Your message has been send</h1>
        <Button @click="ETGoHome">Home</Button>
    </div>
    <Footer />
</template>

<script>
import Button from "../components/Button.vue";
import Footer from "../components/Footer.vue";
export default {
    components: { Button, Footer },
    methods: {
        ETGoHome() {
            this.$router.push("/");
        },
    },
};
</script>

<style>
</style>