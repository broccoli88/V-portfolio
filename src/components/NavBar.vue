
<template>
    <nav class="nav">
        <div class="logo">PJ</div>

        <ul class="nav__links" v-show="!showNavIcon">
            <li v-for="(link, index) in links" :key="index">
                <a class="link" href="#">{{ link }}</a>
            </li>
        </ul>

        <Icon
            @click="toggleNavMobile"
            v-show="showNavIcon"
            icon="bx:menu-alt-right"
            color="#909"
            width="40"
            height="40"
            class="burger"
            :rotate="4"
        />

        <transition name="nav-slide" appear>
            <ul class="nav__mobile" v-show="showNavMobile">
                <li v-for="(link, index) in links" :key="index">
                    <a class="link__mobile" href="#">{{ link }}</a>
                </li>
            </ul>
        </transition>
    </nav>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
    components: { Icon },
    data() {
        return {
            showNavIcon: true,
            showNavMobile: false,
            showNav: false,
            windowWidth: null,
            links: ["About Me", "Projects", "Contact", "Resume"],
        };
    },

    created() {
        window.addEventListener("resize", this.checkWindowWidth);
    },

    methods: {
        checkWindowWidth() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth < 600) {
                this.showNavIcon = true;
                return;
            }
            this.showNavIcon = false;
            this.showNavMobile = false;
            return;
        },

        toggleNavMobile() {
            this.showNavMobile = !this.showNavMobile;
        },
    },
};
</script>

<style>
.nav {
    width: 100%;
    padding: 1em 2em;

    display: flex;
    justify-content: space-between;

    position: relative;
}

.nav__links {
    width: 100%;

    list-style: none;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    gap: clamp(4rem, 8%, 6rem);
}

.link,
.link__mobile {
    text-decoration: none;
    font-family: "Bebas Neue", cursive;
    color: var(--color-primary);
}

.link:hover,
.link__mobile:hover {
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

.burger {
    cursor: pointer;

    position: fixed;
    top: 1.5rem;
    right: 3rem;
    z-index: 9999;
}

.nav-slide-enter-from,
.nav-slide-leave-to {
    transform: translateX(300px);
    opacity: 0;
}

.nav-slide-enter-to,
.nav-slide-leave-from {
    transform: translateX(0);
    opacity: 1;
}

.nav-slide-enter-active,
.nav-slide-leave-active {
    transition: all 0.6s ease;
}
</style>
