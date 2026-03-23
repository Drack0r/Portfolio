import "./globals.css";

export const metadata = {
  title: "Mon Portfolio",
  description: "#", // todo: add description
};

function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head />
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
