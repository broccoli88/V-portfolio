<template>
    <footer>
        <section class="footer-media">
            <figure @mouseenter="hover" @mouseleave="withoutHover">
                <Icon
                    icon="entypo:email"
                    color="#388186"
                    width="25"
                    height="25"
                    :inline="true"
                />
            </figure>
            <figure @mouseenter="hover" @mouseleave="withoutHover">
                <Icon
                    icon="el:linkedin"
                    color="#388186"
                    width="25"
                    height="25"
                    :inline="true"
                />
            </figure>
            <figure @mouseenter="hover" @mouseleave="withoutHover">
                <Icon
                    icon="bi:git"
                    color="#388186"
                    width="25"
                    height="25"
                    :inline="true"
                />
            </figure>
        </section>
        <p>Made by Pawel Jaromin</p>
    </footer>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
    components: { Icon },

    methods: {
        hover(e) {
            const child = e.target.firstElementChild;
            child.style.color = "#a5e9e1";
        },
        withoutHover(e) {
            const child = e.target.firstElementChild;
            child.style.color = "#388186";
        },
    },
};
</script>

<style>
footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 4rem;
}

footer > p {
    font-size: clamp(1.5rem, 2vw, 2rem);
    color: var(--color-secondary);
    text-decoration: underline;
}

.footer-media {
    display: flex;
    gap: 2.5rem;
    margin-bottom: 0.4rem;
}

@media (min-width: 800px) {
    .footer-media {
        display: none;
    }
}
</style>