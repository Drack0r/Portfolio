"use client";

import { AnchorLink } from "@/components/navigation";
import AnchorLinks from "@/data/nav-links.json";

import { NavModal } from "..";

function Nav() {
  return (
    <>
      {/* Mobile version */}
      <NavModal />

      {/* Desktop version */}
      <nav className="hidden lg:block">
        <ul className="flex gap-2.5">
          {AnchorLinks.map((link) => (
            <li key={link.id}>
              <AnchorLink href={link.href}>{link.label}</AnchorLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Nav;
