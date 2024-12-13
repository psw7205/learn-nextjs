import type { Metadata } from "next";
import "./globals.css";
import styles from "@/styles/layout.module.css";

export const metadata: Metadata = {
  title: {
    template: "Billions | %s",
    default: "Billions",
  },
  description: "challenge 1주차",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.container}>
        <div>{children}</div>
      </body>
    </html>
  );
}
