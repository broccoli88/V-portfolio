<template>
    <article class="media">
        <figure>
            <Icon
                icon="entypo:email"
                color="#388186"
                width="30"
                height="30"
                :inline="true"
            />
        </figure>
        <figure>
            <Icon
                icon="el:linkedin"
                color="#388186"
                width="30"
                height="30"
                :inline="true"
            />
        </figure>
        <figure>
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
    data() {
        return {};
    },
};
</script>

<style>
.media {
    width: fit-content;

    display: flex;
    gap: 3rem;
}

.media > figure {
    cursor: pointer;
}

.media > figure:hover {
    filter: brightness(130%);
}
</style>