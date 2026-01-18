import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"; 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "현주꽃방",
  description: "전국 꽃 서비스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="body-padding">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
