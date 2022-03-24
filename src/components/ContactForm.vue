<template>
    <article class="contact">
        <h2>Contact me</h2>
        <form class="contact__form">
            <section class="area-name">
                <label for="name" class="contact__label">
                    <input
                        class="contact__input"
                        type="text"
                        id="name"
                        name="contact"
                        required
                        placeholder="Name"
                    />
                    <span class="placeholder">Name</span>
                </label>
            </section>

            <section class="area-last-name">
                <label for="last-name">last name</label>
                <input
                    type="text"
                    id="last-name"
                    name="contact"
                    required
                    placeholder="Last name"
                />
            </section>
            <section class="area-email">
                <label for="email">email</label>
                <input
                    type="email"
                    id="email"
                    name="contact"
                    required
                    placeholder="Email"
                />
            </section>
            <section class="area-message">
                <label for="message">message</label>
                <textarea
                    name="contact"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
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
};
</script>

<style>
.contact__form {
    margin-top: 4.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
}

.contact__form section {
    display: flex;
    flex-direction: column;
}

/* label {
    font-weight: 600;
} */

/* input,
textarea {
    font-family: "Smooch Sans", sans-serif;
    font-size: clamp(1.6rem, 2.2vw, 2.2rem);
    color: var(--color-font);
    padding: 0.4em 0.6em;
    background: hsl(0, 0%, 20%);
    border: 0;
    border-bottom: 0;
    box-shadow: inset 0 0 10px hsl(0, 0%, 15%);
    outline: none;

    transition: all 0.5s ease;
} */

/* input:focus,
textarea:focus {
    outline: none;
    border-bottom: 2px solid var(--color-primary);
} */

.send {
    margin: 2rem 10px;
}

.contact__label {
    position: relative;
    font-size: clamp(1.6rem, 2.2vw, 2.2rem);
}

.placeholder {
    font-size: clamp(1.6rem, 2.2vw, 2.2rem);
    letter-spacing: 0;
    position: absolute;
    top: 0.25em;
    left: 0.6em;
    bottom: 50%;
    transform: translateY(0%);
    width: calc(100%-1.2em);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.contact__input {
    width: 100%;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: hsl(0, 0%, 20%);
    padding: 0.4em 0.6em;
    font-size: clamp(1.6rem, 2.2vw, 2.2rem);
    font-family: "Smooch Sans", sans-serif;
}

@media (min-width: 600px) {
    .contact__form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
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