import Header from "@/components/header/Header";
import "./styles/global.css";
import { Montserrat } from "@next/font/google";
import Footer from "@/components/footer/Footer";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  adjustFontFallback: false,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className={font.className}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
