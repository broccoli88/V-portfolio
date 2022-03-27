
<template>
    <header
        @scroll="toggleNavbar"
        :class="{ 'scroll-up': scrolledUp, 'scroll-down': scrolledDown }"
        class="header"
    >
        <NavLogo class="nav__logo" />
        <Logo />
        <nav class="nav">
            <transition name="wide-nav-fade" mode="out-in" appear>
                <ul class="nav__links" v-show="!showNavIcon">
                    <li>
                        <a class="link" href="#">About Me</a>
                    </li>
                    <li>
                        <a class="link" href="#">Projects</a>
                    </li>
                    <li>
                        <a class="link" href="#">Contact</a>
                    </li>
                    <li>
                        <router-link
                            :to="{ name: 'resume' }"
                            class="link resume"
                            >Resume</router-link
                        >
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
                <NavLogo class="mobile__logo" />
                <transition name="nav-slide">
                    <ul appear v-if="showNavMobile" class="nav__mobile">
                        <li>
                            <a class="link__mobile" href="#">About Me</a>
                        </li>
                        <li>
                            <a class="link__mobile" href="#">Projects</a>
                        </li>
                        <li>
                            <a class="link__mobile" href="#">Contact</a>
                        </li>
                        <li>
                            <router-link
                                :to="{ name: 'resume' }"
                                class="link__mobile resume"
                                >Resume</router-link
                            >
                        </li>
                    </ul>
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
import NavLogo from "./NavLogo.vue";
import Logo from "./Logo.vue";
import { Icon } from "@iconify/vue";
export default {
    components: { Icon, Media, NavLogo, Logo },

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

    updated() {
        this.linksEntry();
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

        linksEntry() {
            const links = document.querySelectorAll(".link__mobile");
            links.forEach((link, index) => {
                if (link.style.animation.includes("linksFadeIn")) {
                    link.style.animation = "linksFadeOut 0.4s ease";
                } else {
                    link.style.animation = `linksFadeIn 0.4s ease forwards ${
                        index / 7 + 0.5
                    }s`;
                }
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
}

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

.mobile__logo {
    display: none;
}

@media (max-width: 600px) {
    .mobile__logo {
        position: fixed;
        top: 0;
        right: 0;

        z-index: 9999;
    }
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

.resume {
    position: relative;
}

.resume::before {
    content: "";
    display: inline-block;
    width: 30%;
    height: 40%;

    border-top: 1px solid var(--color-primary);
    border-left: 1px solid var(--color-primary);

    position: absolute;
    top: -3px;
    left: -5px;

    transition: all 0.5s ease;
}

.resume::after {
    content: "";
    display: inline-block;
    width: 30%;
    height: 40%;

    border-bottom: 1px solid var(--color-primary);
    border-right: 1px solid var(--color-primary);

    position: absolute;
    bottom: -3px;
    right: -5px;

    transition: all 0.5s ease;
}

.resume:hover::after,
.resume:hover::before,
.resume:focus::after,
.resume:focus::before {
    width: 90%;
    height: 90%;
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

.link__mobile {
    opacity: 0;
}

@keyframes linksFadeIn {
    from {
        opacity: 0;
        /* transform: translateX(200px); */
    }

    to {
        opacity: 1;
        /* transform: translateX(0); */
    }
}

@keyframes linksFadeOut {
    from {
        opacity: 1;
        /* transform: translateX(0px); */
    }

    to {
        opacity: 0;
        /* transform: translateX(200px); */
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
