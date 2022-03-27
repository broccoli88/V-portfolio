<template>
    <figure class="nav__logo">
        <img src="../assets/Logo1.svg" alt="" />
    </figure>
</template>

<script>
export default {};
</script>

<style>
.nav__logo {
    display: none;
}

@media (min-width: 600px) and (max-width: 1365px) {
    .nav__logo {
        width: fit-content;
        height: 100%;

        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        left: clamp(10px, 2vw, 4rem);

        z-index: 9999;
    }

    .nav__logo > img {
        width: 100%;
        height: 80%;
    }
}
</style>