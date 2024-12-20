import type { Metadata } from "next";
import styles from "@/styles/layout.module.css";

export const metadata: Metadata = {
  title: {
    template: "Billionaire | %s",
    default: "Billionaires",
  },
  description: "Billionaires",
};

export default function PersonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
