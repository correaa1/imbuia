import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Imbuia - Raízes do Brasil",
  description: "Imbuia - Uma experiência afetiva de brasilidades. Restaurante com sabores autênticos do Brasil.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased light-effect bg-[#1a1207]`}
      >
        {children}
      </body>
    </html>
  );
}
