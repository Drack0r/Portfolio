"use client";

import Image from "next/image";
import { useState } from "react";

import Modal from "react-modal";

import { AnchorLink } from "@/components/navigation";
// import AnchorLinks from "@/data/nav-links.json";

function NavModal({ links = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className="mr-[6vw] lg:hidden" onClick={openModal}>
        <Image
          src="/images/icons/menu.png"
          alt="Icône de menu"
          width={24}
          height={24}
        />
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        appElement={typeof window !== "undefined" ? document.body : undefined}
        overlayClassName="fixed inset-0 z-50"
        className="shadow-1 absolute right-0 h-screen w-1/2 bg-white"
      >
        <h2 className="body-lg-bold mb-3 bg-black px-5 py-2 text-white">
          Navigation
        </h2>

        <nav>
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link._id} onClick={closeModal}>
                <AnchorLink href={link.href}>{link.label}</AnchorLink>
              </li>
            ))}
          </ul>
        </nav>
      </Modal>
    </div>
  );
}

export default NavModal;
