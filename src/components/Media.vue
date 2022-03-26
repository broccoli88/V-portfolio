<template>
    <article class="media">
        <figure @mouseenter="light" @mouseleave="dark">
            <Icon
                icon="entypo:email"
                color="#388186"
                width="30"
                height="30"
                :inline="true"
            />
        </figure>
        <figure @mouseenter="light" @mouseleave="dark">
            <Icon
                icon="el:linkedin"
                color="#388186"
                width="30"
                height="30"
                :inline="true"
            />
        </figure>
        <figure @mouseenter="light" @mouseleave="dark">
            <Icon
                icon="bi:git"
                color="#388186"
                width="30"
                height="30"
                :inline="true"
            />
        </figure>
    </article>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
    components: { Icon },

    methods: {
        light(e) {
            const child = e.target.firstElementChild;
            child.style.color = "#a5e9e1";
        },

        dark(e) {
            const child = e.target.firstElementChild;
            child.style.color = "#388186";
        },
    },
};
</script>

<style>
.media {
    width: fit-content;

    display: flex;
    gap: 3rem;

    position: absolute;
    bottom: -80vh;
    right: 75px;
    z-index: 9999;
}

.media > figure {
    cursor: pointer;
}
</style>