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

export default NavLink;
