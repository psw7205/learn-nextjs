import { navigation, socials } from "@/components/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="mt-16 flex justify-center gap-x-10">
          {socials.map((item) => (
            <Link
              target="_blank"
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-gray-800"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="size-6" />
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-sm/6 text-gray-600">
          Park Sang Woo, @psw7205
        </p>
      </div>
    </footer>
  );
}
