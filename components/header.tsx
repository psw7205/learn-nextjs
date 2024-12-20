import { navigation } from "@/components/constants";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/">Home</Link>
        </div>
        <div className="flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="mr-2 text-sm/6 font-semibold text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
