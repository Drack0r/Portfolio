function AnchorLink({ href, children }) {
  const customClassName =
    "body-md-semibold px-5 py-2.5 duration-300 hover:bg-black hover:text-white";

  return (
    <a href={href} className={customClassName}>
      {children}
    </a>
  );
}

export default AnchorLink;
