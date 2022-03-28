<template>
    <div class="submitted">
        <Button @click="ETGoHome"> Home </Button>
        <h1>Message submitted :)</h1>
        <h2></h2>
        <Footer />
    </div>
</template>

<script>
import Button from "../components/Button.vue";
import Footer from "../components/Footer.vue";
export default {
    components: { Button },
    methods: {
        ETGoHome() {
            this.$router.push("/");
        },
    },
};
</script>

<style>
.submitted {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
    align-items: center;
    padding: clamp(5rem, 7vw, 8.5rem);
    margin: 0 auto;
}
</style>