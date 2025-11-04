export const metadata = {
  title: "Beauty by Briers",
  description: "Graceful hair & nail care for care and nursing homes.",
}

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}