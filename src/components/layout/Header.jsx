import Link from "next/link";

import NavLink from "@/components/navigation/NavLink";
import navLinks from "@/data/nav-links.json";

function Header() {
  const customClassName =
    "shadow-3 fixed z-50 flex h-20 w-full items-center justify-between bg-white px-[2.7vw]";

  return (
    <header className={customClassName}>
      {/* Logo */}
      <Link href={"/"} className="heading-5">
        Antonin Chevolleau
      </Link>

      {/* Navigation */}
      <nav>
        <ul className="flex gap-2.5">
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <NavLink href={navLink.href}>{navLink.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
