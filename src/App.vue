<template>
    <NavBar />

    <main>
        <Intro />
        <AboutMe />
        <Technologies />
        <Projects />
        <ContactForm />
    </main>
</template>

<script>
import Intro from "./components/Intro.vue";
import NavBar from "./components/NavBar.vue";
import AboutMe from "./components/AboutMe.vue";
import Technologies from "./components/Technologies.vue";
import Projects from "./components/Projects.vue";
import ContactForm from "./components/ContactForm.vue";

export default {
    name: "App",
    components: {
        Intro,
        NavBar,
        AboutMe,
        Technologies,
        Projects,
        ContactForm,
    },
};
</script>

<style>
main {
    margin: 0 auto;
    width: min(100%, 100rem);
    padding: 6rem;
    display: flex;
    flex-direction: column;
    gap: 10rem;
}
</style>
