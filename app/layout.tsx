import type { Metadata } from "next";
import { Luckiest_Guy } from "next/font/google";
import "./globals.css";

const luckiestGuy = Luckiest_Guy({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat App",
  description: "Best chatting platform in the world!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={luckiestGuy.className}>{children}</body>
    </html>
  );
}
