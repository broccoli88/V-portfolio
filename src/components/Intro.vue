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
    height: 80vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
}

.intro__greeting {
    color: var(--color-accent);
    font-size: clamp(3rem, 4.5vw, 7rem);
    font-weight: 600;

    display: flex;
    flex-direction: column;
}

.intro h2 {
    margin: 1rem 0 3rem 0;
    color: var(--color-secondary);
}

.intro__description {
    max-width: 80ch;
    font-size: clamp(2rem, 2.4vw, 2.7rem);
    margin-bottom: 6rem;
}

@media (min-width: 600px) {
    .intro {
        height: 90vh;
        gap: 2rem;
    }

    .intro__description {
        margin-bottom: 0;
    }
}
</style>