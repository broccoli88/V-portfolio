<template>
    <article class="intro">
        <p class="intro__greeting">Hi! I'm</p>
        <h1>Pawel Jaromin</h1>
        <h2>and coding became my passion</h2>
        <p class="intro__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            quibusdam! Pariatur delectus eos hic. Adipisci quidem distinctio
            quaerat architecto cumque.
        </p>
    </article>
</template>

<script>
export default {};
</script>

<style>
.intro {
    width: max-content;
    margin: 2rem auto;
}

.intro__greeting {
    color: var(--color-accent);
    font-size: clamp(3rem, 4.5vw, 6rem);
    font-weight: 600;
}

.intro h2 {
    margin: 1rem 0 3rem 0;
    color: var(--color-secondary);
}

.intro__description {
    width: 60ch;
}

@media (min-width: 600px) {
    .intro {
        margin: 2rem 0;
    }
}
</style>