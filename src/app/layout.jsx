import { Poppins } from "next/font/google";

import Header from "@/components/layout/Header";

import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Mon Portfolio",
  description: "#", // todo: add description
};

function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head />
      <body
        className={`${poppins.className} text-dark bg-white antialiased`}
        suppressHydrationWarning
      >
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
