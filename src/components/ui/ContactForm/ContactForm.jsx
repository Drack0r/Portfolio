import Image from "next/image";

import { Input, TextArea } from "@/components/ui";

function ContactForm() {
  return (
    <form
      action="#"
      className="mx-auto flex w-fit flex-col items-center gap-7.5 pb-14.5"
    >
      <Input
        type={"text"}
        id={"name"}
        label={"Nom"}
        placeholder={"Martin Dupont"}
      />

      <Input
        type={"text"}
        id={"email"}
        label={"Adresse e-mail"}
        placeholder={"exemple@gmail.com"}
      />

      <TextArea
        id={"message"}
        label={"Message"}
        placeholder={"Votre message..."}
      />

      <button className="bg-stroke flex cursor-pointer items-center gap-2 rounded-sm px-6 py-3 transition-opacity duration-300 hover:opacity-50">
        <Image
          src={"/images/icons/send.png"}
          alt="Icône envoyer"
          width={20}
          height={20}
        />
        Envoyer
      </button>
    </form>
  );
}

export default ContactForm;
