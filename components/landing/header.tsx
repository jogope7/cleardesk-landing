import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/landing/container";

type HeaderProps = {
  basePath?: string;
};

const navItems = [
  { label: "Product", href: "#product" },
  { label: "Examples", href: "#examples" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Integrations", href: "#integrations" },
  { label: "Calculator", href: "#calculator" },
];

export function SiteHeader({ basePath = "" }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/cd_logo.png"
            alt="ClearDesk"
            width={140}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={`${basePath}${item.href}`}
              className="transition-colors hover:text-zinc-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button asChild className="hidden md:inline-flex">
          <Link href="https://calendly.com/jose-cleardesk/30-min-meeting" target="_blank">Book a demo</Link>
        </Button>

        <Button asChild size="sm" className="md:hidden">
          <Link href="https://calendly.com/jose-cleardesk/30-min-meeting" target="_blank">Book a demo</Link>
        </Button>
      </Container>
    </header>
  );
}

