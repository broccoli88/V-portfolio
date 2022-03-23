<template>
    <nav>
        <div class="nav">
            <div class="logo">PJ</div>
            <Icon
                @click="toggleNav"
                icon="bx:menu-alt-right"
                color="#909"
                width="40"
                height="40"
                class="burger"
                :rotate="4"
            />
            <transition name="switch">
                <transition-group
                    appear
                    tag="ul"
                    class="nav__links"
                    v-show="showNav"
                    name="links"
                >
                    <li v-for="(link, index) in links" :key="index">
                        <a href="#">{{ link }}</a>
                    </li>
                </transition-group>
            </transition>
        </div>
    </nav>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
    components: { Icon },
    data() {
        return {
            showNav: false,
            links: ["About Me", "Projects", "Contact", "Resume"],
        };
    },
    methods: {
        toggleNav() {
            const links = document.querySelectorAll(".nav__links li");

            this.showNav = !this.showNav;

            links.forEach((link, index) => {
                if (link.style.animation.includes("navLinkShow")) {
                    link.style.animation = `navLinkFade 0.4s ease backwards ${
                        index / 8
                    }s`;
                } else {
                    link.style.animation = `navLinkShow 0.4s ease forwards ${
                        index / 7 + 0.5
                    }s`;
                }
            });
        },
    },
};
</script>

<style>
.nav {
    padding: 2rem;

    display: flex;
    justify-content: space-between;

    position: relative;
}

.burger {
    position: absolute;
    top: 1rem;
    right: 2rem;
    z-index: 9999;

    cursor: pointer;
}

.nav__links {
    width: 70%;
    height: 100vh;

    padding: 0 8rem 0 10rem;
    background: hsl(0, 0%, 20%, 0.5);
    border: 1px solid black;

    box-shadow: 0 0 15px black;

    list-style-type: none;
    font-family: "Bebas Neue", cursive;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;

    position: absolute;
    top: 0;
    right: 0;
}

.nav__links li a {
    text-decoration: none;
    color: var(--color-primary);
    font-size: 2.5rem;
}

.nav__links li {
    transform: translateX(200px);
    opacity: 0;
}

.switch-enter-from,
.switch-leave-to {
    transform: translate(100vw);
    opacity: 0;
}

.switch-enter-active {
    transition: all 0.5s ease-in;
}

.switch-leave-active {
    transition: all 1s ease-in;
}

@keyframes navLinkShow {
    0% {
        transform: translate(200px);
        opacity: 0;
    }
    100% {
        transform: translate(0);
        opacity: 1;
    }
}

@keyframes navLinkFade {
    0% {
        transform: translate(0px);
        opacity: 1;
    }
    100% {
        transform: translate(200px);
        opacity: 0;
    }
}

@media (min-width: 600px) {
    .burger {
        display: none;
    }

    .nav__links {
        width: initial;
        height: fit-content;

        padding: 0.5em 3rem;

        box-shadow: none;
        border: 0;
        background-color: inherit;

        font-size: clamp(1.6rem, 1.9vw, 2.2rem);

        position: inherit;
        display: flex;
        flex-direction: row;
    }

    .nav__links li {
        transform: none;
        opacity: 1;
    }

    .nav__links li a {
        font-size: clamp(1.8rem, 2.2vw, 2.4rem);
    }
}
</style>