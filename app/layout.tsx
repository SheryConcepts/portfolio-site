import "./globals.css";
import { Roboto_Mono } from "next/font/google";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-robot-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto_mono.className}>
      <body className="bg-s-8 px-8 pt-8">{children}</body>
      <div className="h-full w-full bg-s-8 px-8 pt-8"></div>
    </html>
  );
}
