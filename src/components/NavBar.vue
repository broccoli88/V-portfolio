
<template>
    <header
        @scroll="toggleNavbar"
        :class="{ 'scroll-up': scrolledUp, 'scroll-down': scrolledDown }"
        class="header"
    >
        <nav class="nav">
            <div class="logo">PJ</div>
            <transition name="wide-nav-fade" mode="out-in">
                <ul class="nav__links" v-show="!showNavIcon">
                    <li v-for="(link, index) in links" :key="index">
                        <a class="link" href="#">{{ link }}</a>
                    </li>
                </ul>
            </transition>
            <transition name="switch" mode="out-in">
                <Icon
                    @click="slideNavMobile"
                    v-if="changeIcon"
                    v-show="showNavIcon"
                    icon="bx:menu-alt-right"
                    color="#909"
                    width="40"
                    height="40"
                    class="burger"
                    :rotate="4"
                />
                <Icon
                    class="close-burger"
                    @click="hideNavMobile"
                    v-show="showNavIcon"
                    v-else
                    icon="emojione-monotone:heavy-multiplication-x"
                    color="purple"
                    width="25"
                    height="25"
                    :inline="true"
                />
            </transition>
            <div class="list-container">
                <transition name="nav-slide">
                    <transition-group
                        tag="ul"
                        appear
                        v-if="showNavMobile"
                        class="nav__mobile"
                        @before-enter="beforeEnter"
                        @enter="enter"
                    >
                        <li
                            v-for="(link, index) in links"
                            :key="link"
                            :data-index="index"
                        >
                            <a class="link__mobile" href="#">{{ link }}</a>
                        </li>
                    </transition-group>
                </transition>

                <transition name="nav-icons" v-if="showNavMobile" appear>
                    <Media class="nav__icons" />
                </transition>
            </div>
        </nav>
    </header>
</template>

<script>
import Media from "./Media.vue";
import gsap from "gsap";
import { Icon } from "@iconify/vue";
export default {
    components: { Icon, Media },

    data() {
        return {
            scrolledDown: false,
            scrolledUp: false,
            previousScroll: 0,
            changeIcon: null,
            showNavIcon: null,
            showNavMobile: null,
            showNav: null,
            windowWidth: null,
            links: ["About Me", "Projects", "Contact", "Resume"],
        };
    },

    created() {
        window.addEventListener("resize", this.checkWindowWidth);
        this.checkWindowWidth();
    },

    mounted() {
        window.addEventListener("scroll", this.toggleNavbar);
    },

    methods: {
        toggleNavbar() {
            if (window.innerWidth >= 600) {
                const currentScroll = window.scrollY;
                if (currentScroll <= 0) {
                    this.scrolledDown = false;
                    this.scrolledUp = false;
                } else if (currentScroll > this.previousScroll) {
                    this.scrolledDown = true;
                    this.scrolledUp = false;
                } else if (currentScroll < this.previousScroll) {
                    this.scrolledDown = false;
                    this.scrolledUp = true;
                }

                this.previousScroll = currentScroll;
            }
        },

        beforeEnter(el) {
            el.style.opacity = 0;
            el.style.transform = "translateX(80px)";
        },

        enter(el, done) {
            gsap.to(el, {
                opacity: 1,
                x: 0,
                delay: 0.4 + el.dataset.index * 0.1,
                onComplete: done,
            });
        },

        checkWindowWidth() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth < 600) {
                this.showNavIcon = true;
                this.changeIcon = true;
                return;
            }
            this.showNavIcon = false;
            this.showNavMobile = false;

            return;
        },

        slideNavMobile() {
            this.showNavMobile = !this.showNavMobile;
            this.changeIcon = !this.changeIcon;
        },

        hideNavMobile() {
            this.showNavMobile = !this.showNavMobile;
            this.changeIcon = !this.changeIcon;
        },
    },
};
</script>

<style>
.scroll-down {
    transform: translateY(-100%);
}

.scroll-up {
    box-shadow: 0 0 8px hsl(0, 0%, 5%, 0.5);
}

.nav {
    width: 100%;
    padding: 1em 2em;

    display: flex;
    justify-content: space-between;

    /* position: relative; */
}

.nav__links {
    width: 100%;

    list-style: none;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    gap: clamp(4rem, 8%, 6rem);
}

.list-container {
    position: relative;
}

.nav__icons {
    position: fixed;
    top: 80vh;
    right: 75px;
    z-index: 9999;
}

.link,
.link__mobile {
    text-decoration: none;
    font-family: "Bebas Neue", cursive;
    color: var(--color-primary);
    outline: none;
}

link::before {
    content: "";
    display: inline-block;
    width: 1%;
    height: 1%;
}

.link:hover,
.link:focus,
.link__mobile:hover,
.link__mobile:focus {
    color: var(--color-secondary);
}

.nav__mobile {
    width: min(100%, 300px);
    height: 100vh;
    list-style: none;

    background: hsl(0, 0%, 18%, 1);
    border: 1px solid black;
    box-shadow: 0 0 15px black;

    font-size: 140%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
}

.burger,
.close-burger {
    cursor: pointer;

    position: fixed;
    z-index: 9999;
}

.burger {
    top: 1.5rem;
    right: 1rem;
}

.close-burger {
    top: 2.25rem;
    right: 1.6rem;
}

.nav-slide-enter-from {
    transform: translateX(300px);
    opacity: 0;
}

.nav-slide-enter-active {
    transition: all 0.6s ease;
}

.nav-slide-leave-active {
    animation: navWait 0.6s ease;
}

@keyframes navWait {
    from {
        opacity: 1;
        transform: translateX(0px);
    }

    to {
        opacity: 0;
        transform: translateX(300px);
    }
}

.switch-enter-from,
.switch-leave-to {
    opacity: 0;
}

.switch-enter-to,
.switch-leave-from {
    opacity: 1;
}

.switch-enter-active,
.switch-leave-active {
    transition: all 0.4s ease;
}

.nav-icons-leave-from {
    opacity: 1;
}

.nav-icons-leave-to {
    opacity: 0;
    transform: translateX(300px);
}

.nav-icons-leave-active {
    animation: navWait 0.6s ease;
}

.nav-icons-enter-active {
    animation: navIconsFade 0.8s ease;
}

@keyframes navIconsFade {
    0% {
        opacity: 0;
    }
    60% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.wide-nav-fade-enter-from,
.wide-nav-fade-leave-to {
    opacity: 0;
    transform: translateY(-80px);
}

.wide-nav-fade-enter-active,
.wide-nav-fade-leave-active {
    transition: all 0.4s ease;
}

@media (min-width: 600px) {
    header {
        width: 100%;
        height: 3.5em;

        position: fixed;
        z-index: 8888;

        background-color: hsl(0, 0%, 15%, 0.6);

        transition: all 0.3s ease-in-out;
    }
}
</style>
