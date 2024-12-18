import Tailwind from "@/components/tailwind";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tailwind",
};

export default function TailwindPage() {
  return (
    <div>
      <Tailwind />
    </div>
  );
}
