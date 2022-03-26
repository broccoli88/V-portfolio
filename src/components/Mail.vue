<template>
    <article class="side-mail">
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
        <p class="mail">pawel.jaromin@protonmail.com</p>
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
};
</script>

<style>
.side-mail {
    width: fit-content;

    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 30%;
    right: 3%;
    z-index: 11;

    cursor: pointer;
}

.mail {
    height: 32rem;
    writing-mode: vertical-lr;
    letter-spacing: 1.5px;
    font-weight: 500;
}

.mail:hover {
    filter: brightness(130%);
    font-weight: 600;
}
</style>