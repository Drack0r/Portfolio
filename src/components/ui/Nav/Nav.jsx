"use client";

import { AnchorLink } from "@/components/navigation";

// import AnchorLinks from "@/data/nav-links.json";
import { NavModal } from "..";

function Nav({ links = [] }) {
  return (
    <>
      {/* Mobile version */}
      <NavModal links={links} />

      {/* Desktop version */}
      <nav className="hidden lg:block">
        <ul className="flex gap-2.5">
          {links.map((link) => (
            <li key={link._id}>
              <AnchorLink href={link.href}>{link.label}</AnchorLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Nav;
