<template>
    <article class="side-mail">
        <p class="mail">pawel.jaromin@protonmail.com</p>
    </article>
</template>

<script>
export default {};
</script>

<style>
.side-mail {
    width: 2rem;

    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;

    position: fixed;
    bottom: 20%;
    right: clamp(12px, 2vw, 4rem);
    z-index: 11;
    cursor: pointer;
}

.side-mail::before {
    content: "";
    display: block;

    width: 120%;
    height: 6%;

    border-top: 2px solid var(--color-secondary);
    border-right: 2px solid var(--color-secondary);
    border-left: 2px solid var(--color-secondary);

    position: absolute;
    top: -5rem;
    right: 0px;
    z-index: 10;
}

.side-mail::after {
    content: "";
    display: block;

    width: 120%;
    height: 6%;

    border-bottom: 2px solid var(--color-secondary);
    border-right: 2px solid var(--color-secondary);
    border-left: 2px solid var(--color-secondary);

    position: absolute;
    bottom: -5rem;
    right: 0px;
    z-index: 10;
}

.mail {
    font-size: 2rem;
    height: 28rem;
    writing-mode: vertical-lr;
    letter-spacing: 3px;
    line-height: 1;
    font-weight: 500;
}

.mail:hover {
    filter: brightness(130%);
    font-weight: 600;
}

@media (min-width: 1300px) {
    .side-mail {
        right: 5%;
    }
}
</style>