<template>
    <article v-scrollAnimation class="about" id="about-me">
        <h2 v-scrollAnimation>About Me</h2>
        <section v-scrollAnimation class="about__description">
            <transition name="show-text" mode="out-in" appear>
                <p v-if="!showSnippet">
                    {{ aboutMeSnippet }}
                </p>
                <p v-else>{{ aboutMe }}</p>
            </transition>
        </section>
        <Button v-scrollAnimation class="show-more" @click="toggleAbout">
            <transition name="show-text" mode="out-in">
                <span v-if="!showSnippet"> Show More</span>
                <span v-else> Show Less</span>
            </transition></Button
        >
    </article>
    <Technologies />
</template>

<script>
import Button from "./Button.vue";
import textAboutMe from "../../Data/about-me";
import Technologies from "./Technologies.vue";

const scrollAnimation = {
    mounted: (el) => {
        let option = {
            root: null,
            rootMargin: "-150px",
            threshold: 0,
        };

        const animationObserver = new IntersectionObserver(
            (entries, animationObserver) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    el.classList.toggle("on-entry");
                    animationObserver.unobserve(el);
                });
            }
        );
        animationObserver.observe(el);
    },
};

export default {
    directives: { scrollAnimation },
    components: { Button, Technologies },
    data() {
        return {
            showSnippet: false,
            aboutMe: textAboutMe.aboutMe,
        };
    },

    methods: {
        toggleAbout() {
            this.showSnippet = !this.showSnippet;
        },
    },

    computed: {
        aboutMeSnippet() {
            return this.aboutMe.substring(0, 120) + "...";
        },
    },
};
</script>

<style>
.about {
    margin-top: 3rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
}

.about__description {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    position: relative;

    padding: clamp(3rem, 4.5vw, 5.5rem);
}

.about__description::before {
    content: "";
    display: inline-block;
    width: 30%;
    height: 30%;

    border-top: 1px solid var(--color-primary);
    border-left: 1px solid var(--color-primary);

    position: absolute;
    top: -10px;
    left: -10px;
}

.about__description::after {
    content: "";
    display: inline-block;
    width: 30%;
    height: 30%;

    border-bottom: 1px solid var(--color-primary);
    border-right: 1px solid var(--color-primary);

    position: absolute;
    bottom: -10px;
    right: -10px;
}

.show-more {
    align-self: center;
    margin: 3rem 0;
}

.show-text-enter-from,
.show-text-leave-to {
    opacity: 0;
    transform: translateY(60px);
}

.show-text-enter-active,
.show-text-leave-active {
    transition: all 0.3s ease-in;
}

.on-entry {
    animation: onEntryAnimation 1s ease;
    animation-iteration-count: 1;
}

@keyframes onEntryAnimation {
    0% {
        opacity: 0;
        transform: translateY(60px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (min-width: 800px) {
    .about {
        height: 23em;
    }

    .about__description {
        width: 100%;
        height: 100%;
        flex-direction: row;
        justify-content: space-between;
    }

    .about__img {
        max-width: 250px;
    }
}
</style>