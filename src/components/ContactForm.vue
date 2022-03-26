<template>
    <article class="contact">
        <h2>Contact me</h2>
        <form class="contact__form">
            <section class="input-container area-name">
                <label for="name" class="contact__label"></label>
                <input
                    @blur="loseOutline"
                    @focus="outline"
                    class="contact__input"
                    type="text"
                    id="name"
                    name="contact"
                    required
                    placeholder="Name"
                />
            </section>

            <section class="input-container area-last-name">
                <label for="last-name"></label>
                <input
                    @blur="loseOutline"
                    @focus="outline"
                    class="contact__input"
                    type="text"
                    id="last-name"
                    name="contact"
                    required
                    placeholder="Last name"
                />
            </section>
            <section class="input-container area-email">
                <label for="email"></label>
                <input
                    @blur="loseOutline"
                    @focus="outline"
                    class="contact__input"
                    type="email"
                    id="email"
                    name="contact"
                    required
                    placeholder="Email"
                />
            </section>
            <section class="input-container area-message">
                <label for="message"></label>
                <textarea
                    @blur="loseOutline"
                    @focus="outline"
                    class="contact__input"
                    name="contact"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    required
                ></textarea>
            </section>
            <Button class="send">
                <span>Send</span>
            </Button>
        </form>
    </article>
</template>

<script>
import Button from "./Button.vue";
export default {
    components: { Button },
    methods: {
        outline(e) {
            const parent = e.target.parentElement;
            parent.classList.add("outline");
        },

        loseOutline(e) {
            const parent = e.target.parentElement;
            parent.classList.remove("outline");
        },
    },
};
</script>

<style>
.input-container {
    padding: 2px 0;
    display: flex;
    flex-direction: column;
}

.outline {
    background-image: linear-gradient(
        to right,
        var(--color-primary),
        var(--color-primary)
    );

    background-position: 0 100%;
    background-size: 100% 2px;
    background-repeat: no-repeat;

    animation: inputBorderToggle 1s ease;
}

@keyframes inputBorderToggle {
    0% {
        background-size: 0 2px;
    }
    100% {
        background-size: 100% 2px;
    }
}

.contact__input {
    width: 100%;
    padding: 0.6em;

    font-family: "Smooch Sans", sans-serif;
    font-size: clamp(1.6rem, 2.2vw, 2.2rem);
    color: var(--font-color);

    border-radius: 0;
    border: none;
    background-color: hsl(0, 0%, 20%);
}

.contact__input:focus {
    outline: none;
    box-shadow: none;
}

.contact__form {
    margin-top: 4.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 1.5rem;
}

.send {
    margin: 2rem 10px;
}

@media (min-width: 600px) {
    .contact__form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
            "name lastname"
            "email email"
            "message message"
            "button button";
    }

    .area-name {
        grid-area: name;
    }

    .area-last-name {
        grid-area: lastname;
    }

    .area-email {
        grid-area: email;
    }

    .area-message {
        grid-area: message;
    }

    .send {
        grid-area: button;
    }
}
</style>