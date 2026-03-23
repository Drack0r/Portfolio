import Link from "next/link";

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="body-md-semibold px-5 py-2.5 duration-300 hover:bg-black hover:text-white"
    >
      {children}
    </a>
  );
}

const navigationItems = [
  { id: "home", href: "#", label: "Accueil" },
  { id: "about", href: "#", label: "Présentation" },
  { id: "projects", href: "#", label: "Projets" },
  { id: "services", href: "#", label: "Services" },
  { id: "skills", href: "#", label: "Compétences" },
  { id: "contact", href: "#", label: "Contact" },
];

function Header() {
  return (
    <header className="fixed z-10 flex h-20 w-full items-center justify-between bg-white px-9.75">
      <Link href={"/"} className="heading-5">
        Antonin Chevolleau
      </Link>

      <nav>
        <ul className="flex gap-2.5">
          {navigationItems.map((item, index) => (
            <li key={item.id}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
