<template>
    <NavBar />

    <main>
        <transition name="load" appear>
            <Intro />
        </transition>
        <AboutMe />
        <Projects />
        <ContactForm />
    </main>
    <Footer />
    <transition name="side-bar-fade" appear>
        <SideBar v-if="showSideBar" />
    </transition>
    <transition name="side-mail-fade" appear>
        <Mail v-if="showSideBar" />
    </transition>
</template>

<script>
import Intro from "./components/Intro.vue";
import NavBar from "./components/NavBar.vue";
import AboutMe from "./components/AboutMe.vue";
import Projects from "./components/Projects.vue";
import ContactForm from "./components/ContactForm.vue";
import SideBar from "./components/SideBar.vue";
import Mail from "./components/Mail.vue";
import Footer from "./components/Footer.vue";
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
        Footer,
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
.before-enter {
    opacity: 0;
    transform: translateY(-60px);
    transition: all 1s ease;
}
.enter {
    opacity: 1;
    transform: translateY(0);
}
main {
    margin: 0 auto;
    width: min(100%, 120rem);
    padding: clamp(5rem, 7vw, 8.5rem);
    display: flex;
    flex-direction: column;
    gap: 6rem;
}
.side-bar-fade-enter-from,
.side-bar-fade-leave-to {
    opacity: 0;
    transform: translateX(-50px);
}
.side-bar-fade-enter-active,
.side-bar-fade-leave-active {
    transition: all 0.4s ease;
}
.side-mail-fade-enter-from,
.side-mail-fade-leave-to {
    opacity: 0;
    transform: translateX(50px);
}
.side-mail-fade-enter-active,
.side-mail-fade-leave-active {
    transition: all 0.4s ease;
}

.load-enter-from {
    opacity: 0;
    transform: translateY(60px);
}

.load-enter-active {
    transition: all 1s ease;
}

@media (min-width: 600px) {
    main {
        gap: 10rem;
    }
}
</style>