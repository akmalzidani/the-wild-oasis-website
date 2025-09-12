import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

import "@/app/_styles/globals.css";

export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-primary-950 text-primary-50">
        <header>
          <Logo />
        </header>
        <Navigation />
        <main>{children}</main>
        <footer>Copyright© by The Wild Oasis</footer>
      </body>
    </html>
  );
}
