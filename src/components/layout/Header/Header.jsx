import { Logo, Nav } from "@/components/ui";
import { getPortfolioData } from "@/lib/api";

async function Header() {
  const { navLinks } = await getPortfolioData();

  return (
    <header className="shadow-3 pos-center flex-between fixed z-40 h-20 w-full max-w-[1920px] bg-white px-[2.7vw]">
      <Logo />
      <Nav links={navLinks} />
    </header>
  );
}

export default Header;
