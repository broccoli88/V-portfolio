<template>
    <!-- <header>
        <NavBar />
    </header> -->
    <!-- <Intro /> -->
    <!-- <AboutMe /> -->
    <!-- <Technologies /> -->
    <Projects />
</template>

<script>
import Intro from "./components/Intro.vue";
import NavBar from "./components/NavBar.vue";
import AboutMe from "./components/AboutMe.vue";
import Technologies from "./components/Technologies.vue";
import Projects from "./components/Projects.vue";
export default {
    name: "App",
    components: { Intro, NavBar, AboutMe, Technologies, Projects },
};
</script>

<style>
</style>
