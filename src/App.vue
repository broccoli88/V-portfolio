<template>
    <NavBar />

    <main>
        <Intro />
        <AboutMe />
        <Projects />
        <ContactForm />
    </main>
    <SideBar v-if="showSideBar" />
    <Mail v-if="showSideBar" />
</template>

<script>
import Intro from "./components/Intro.vue";
import NavBar from "./components/NavBar.vue";
import AboutMe from "./components/AboutMe.vue";
import Projects from "./components/Projects.vue";
import ContactForm from "./components/ContactForm.vue";
import SideBar from "./components/SideBar.vue";
import Mail from "./components/Mail.vue";

export default {
    name: "App",
    components: {
        Intro,
        NavBar,
        AboutMe,
        Projects,
        ContactForm,
        SideBar,
        Mail,
    },

    data() {
        return {
            showSideBar: null,
        };
    },

    created() {
        window.addEventListener("resize", this.checkSideBar);
        this.checkSideBar();
    },

    methods: {
        checkSideBar() {
            if (window.innerWidth >= 800) {
                this.showSideBar = true;
                return;
            }
            this.showSideBar = false;
            return;
        },
    },
};
</script>

<style>
main {
    margin: 0 auto;
    width: min(100%, 120rem);
    padding: 5rem;
    display: flex;
    flex-direction: column;
    gap: 6rem;
}

@media (min-width: 600px) {
    main {
        gap: 10rem;
    }
}
</style>
