import Link from "next/link";

const navLinks = [
  { text: "QR Generator", path: "/qr-generator", color: "blue-500" },
  { text: "QR Scanner", path: "/qr-scanner", color: "green-500" },
  { text: "Scan history", path: "/scan-history", color: "blue-500" },
];

export default function Header() {
  return (
    <ul className="w-screen flex items-center justify-center gap-4 py-4 border-b-2 border-blue-400 font-medium">
      {navLinks.map((link) => (
        <li key={link.path}>
          <Link className={`text-${link.color}`} href={link.path}>
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
