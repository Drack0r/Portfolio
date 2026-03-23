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
  { id: "home", href: "#home", label: "Accueil" },
  { id: "about", href: "#about", label: "Présentation" },
  { id: "projects", href: "#projects", label: "Projets" },
  { id: "services", href: "#services", label: "Services" },
  { id: "skills", href: "#skills", label: "Compétences" },
  { id: "contact", href: "#contact", label: "Contact" },
];

function Header() {
  return (
    <header className="shadow-3 fixed z-10 flex h-20 w-full items-center justify-between bg-white px-[2.7vw]">
      <Link href={"/"} className="heading-5">
        Antonin Chevolleau
      </Link>

      <nav>
        <ul className="flex gap-2.5">
          {navigationItems.map((item) => (
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
