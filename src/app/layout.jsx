import { Poppins } from "next/font/google";

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
    <html lang="fr">
      <head />
      <body
        className={`${poppins.className} antialiased`}
        suppressHydrationWarning
      >
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
