<template>
    <article class="technologies">
        <h3>Technologies I have been working with</h3>

        <section class="icons">
            <figure>
                <Icon
                    icon="fontisto:html5"
                    color="#388186"
                    width="50"
                    height="50"
                    :inline="true"
                />
                <figcaption>HTML</figcaption>
            </figure>
            <figure>
                <Icon
                    icon="fontisto:css3"
                    color="#388186"
                    width="50"
                    height="50"
                    :inline="true"
                />
                <figcaption>CSS</figcaption>
            </figure>
            <figure>
                <Icon
                    icon="cib:javascript"
                    color="#388186"
                    width="50"
                    height="50"
                    :inline="true"
                />
                <figcaption>JavaScript</figcaption>
            </figure>
            <figure>
                <Icon
                    icon="akar-icons:node-fill"
                    color="#388186"
                    width="50"
                    height="50"
                    :inline="true"
                />
                <figcaption>Node.JS</figcaption>
            </figure>
            <figure>
                <Icon
                    icon="uim:vuejs"
                    color="#388186"
                    width="50"
                    height="50"
                    :inline="true"
                />
                <figcaption>Vue</figcaption>
            </figure>
            <figure>
                <Icon
                    icon="bi:git"
                    color="#388186"
                    width="50"
                    height="50"
                    :inline="true"
                />
                <figcaption>Git</figcaption>
            </figure>
        </section>
    </article>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
    components: { Icon },
};
</script>

<style>
.technologies {
    width: min(100%, 90rem);
    margin: 2rem 0;
    position: relative;
}

.technologies::before {
    content: "";
    display: inline-block;
    width: 30%;
    height: 30%;

    border-top: 1px solid var(--color-primary);
    border-left: 1px solid var(--color-primary);

    pointer-events: none;

    position: absolute;
    top: -10px;
    left: -10px;
}

.technologies::after {
    content: "";
    display: inline-block;
    width: 30%;
    height: 30%;

    border-bottom: 1px solid var(--color-primary);
    border-right: 1px solid var(--color-primary);

    pointer-events: none;

    position: absolute;
    bottom: -10px;
    right: -10px;
}

.icons {
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.icons figure {
    width: min(110px, 30%);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
}

.icons figure:hover {
    filter: brightness(130%);
}

.icons figure:hover figcaption {
    font-weight: 600;
}
</style>