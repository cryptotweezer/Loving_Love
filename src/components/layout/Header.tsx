import Link from "next/link";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "MEET LENA", href: "/meet-lena" },
  { label: "YOUR CEREMONY", href: "/your-ceremony" },
  { label: "MOMENTS", href: "/moments" },
  { label: "SERVICES", href: "/other-services" },
  { label: "PARTNERS", href: "/partners" },
  { label: "CONNECT", href: "/connect" },
];

export default function Header() {
  return (
    <header>
      {/* Brand */}
      <div>
        <p>LENA SAUNIG</p>
        <p>LOVING LOVE</p>
        <p>Marriage Celebrant</p>
        <a href="tel:0405143843">0405 143 843</a>
      </div>

      {/* Navigation */}
      <nav>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
