<template>
    <article class="about">
        <h2>About Me</h2>
        <section class="about__description">
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                vero expedita labore quam at obcaecati sed nihil. Culpa, non,
                voluptatem labore natus porro maxime consectetur sapiente enim
                totam, molestias assumenda?
            </p>
            <figure class="about__img">
                <img src="../assets/Pawel_Jaromin.jpeg" alt="" />
            </figure>
            <Button class="show-more">
                <span>Show More</span>
            </Button>
        </section>
    </article>
</template>

<script>
import Button from "./Button.vue";
export default {
    components: { Button },
};
</script>

<style>
.about {
    position: relative;
    display: flex;
    flex-direction: column;
}

.about::before {
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

.about::after {
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

.about__description {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
}
.about__description > p {
    margin-top: 3rem;
    width: 60ch;
}

.about__img {
    width: min(30%, 300px);
    aspect-ratio: 1;
    align-self: flex-end;
}

.about__img img {
    width: 100%;
    object-fit: cover;
}

.show-more {
    position: absolute;
    bottom: 10px;
    left: 10px;
}

@media (min-width: 600px) {
    .about__description {
        flex-direction: row;
        justify-content: space-between;
    }
}
</style>