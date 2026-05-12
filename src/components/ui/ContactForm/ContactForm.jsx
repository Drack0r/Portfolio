"use client";

import Image from "next/image";

import { useForm, ValidationError } from "@formspree/react";

import { Input, TextArea } from "@/components/ui";

function ContactForm() {
  const [state, handleSubmit] = useForm("xvzvwgva");

  if (state.succeeded) {
    return (
      <div className="mx-auto flex w-fit flex-col items-center gap-7.5 pb-14.5 text-center text-white">
        <h3 className="text-xl">Merci pour votre message !</h3>
        <p>Je vous répondrai dans les plus brefs délais.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-fit flex-col items-center gap-7.5 pb-14.5"
    >
      <Input
        type={"text"}
        id={"name"}
        name={"name"}
        label={"Nom"}
        placeholder={"Martin Dupont"}
        required
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <Input
        type={"email"}
        id={"email"}
        name={"email"}
        label={"Adresse e-mail"}
        placeholder={"exemple@gmail.com"}
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <TextArea
        id={"message"}
        name={"message"}
        label={"Message"}
        placeholder={"Votre message..."}
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-stroke flex cursor-pointer items-center gap-2 rounded-sm px-6 py-3 transition-opacity duration-300 hover:opacity-50"
      >
        <Image
          src={"/images/icons/send.png"}
          alt="Icône envoyer"
          width={20}
          height={20}
        />
        {state.submitting ? "Envoi..." : "Envoyer"}
      </button>
    </form>
  );
}

export default ContactForm;
