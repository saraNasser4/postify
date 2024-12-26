import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Provider from "./components/Provider";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Postify",
  description: "Connect Faster, Share Smarter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} !font-jost antialiased`}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
