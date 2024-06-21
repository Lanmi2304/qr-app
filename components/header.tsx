import Link from "next/link";

export default function Header() {
  return (
    <ul className="w-screen flex items-center justify-center gap-4 py-4 border-b-2 border-blue-400 font-medium">
      <li className="text-blue-500">
        <Link href="/qr-generator">QR Generator</Link>
      </li>
      <li className="text-green-500">
        <Link href="/qr-scanner">QR Scanner</Link>
      </li>
    </ul>
  );
}
