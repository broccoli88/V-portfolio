<template>
    <article class="side-media">
        <figure>
            <Icon
                icon="charm:triangle"
                color="purple"
                width="20"
                height="20"
                :rotate="2"
                :inline="true"
                class="pointer"
            />
        </figure>
        <figure @mouseenter="hoverIn" @mouseleave="hoverOut">
            <Icon
                icon="entypo:email"
                :color="color"
                width="25"
                height="25"
                :inline="true"
                class="side-icon"
            />
        </figure>
        <figure @mouseenter="hoverIn" @mouseleave="hoverOut">
            <Icon
                icon="el:linkedin"
                :color="color"
                width="25"
                height="25"
                :inline="true"
                class="side-icon"
            />
        </figure>
        <figure @mouseenter="hoverIn" @mouseleave="hoverOut">
            <Icon
                icon="bi:git"
                :color="color"
                width="25"
                height="25"
                :inline="true"
                class="side-icon"
            />
        </figure>
        <figure>
            <Icon
                icon="charm:triangle"
                color="purple"
                width="20"
                height="20"
                :rotate="4"
                :inline="true"
                class="pointer"
            />
        </figure>
    </article>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
    components: { Icon },
    data() {
        return {
            showSideBar: null,
            color: "#388186",
        };
    },

    methods: {
        hoverIn(e) {
            const child = e.target.firstElementChild;
            child.style.color = "#a5e9e1";
        },

        hoverOut(e) {
            const child = e.target.firstElementChild;
            child.style.color = "#388186";
        },
    },
};
</script>

<style>
.side-media {
    width: fit-content;

    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;

    position: fixed;
    top: 30%;
    left: 3%;
    z-index: 11;
}

.side-icon {
    cursor: pointer;
}

.pointer {
    margin: 2rem 0;
}
</style>