import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"; 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HJ Flower",
  description: "전국 꽃 서비스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body style={{ paddingTop: "120px" }}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
