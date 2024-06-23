import Button from "@/components/buttons/Button";
import Link from "next/link";
import SelectEl from "./test1/page";
import SelectDemo from "./test1/page";

export default function Home() {
  return (
    <>
      <SelectDemo />
      <section className="w-screen h-screen flex items-center justify-center relative m-auto">
        <div className="flex flex-col">
          <h1 className="text-4xl font-semibold mb-8 text-gray-100 text-center">
            <span className="text-purple-600">Create</span> or
            <span className="text-green-400"> Scan</span> your
            <span className="text-orange-400"> QR</span>
          </h1>

          <div className="flex justify-evenly">
            <Link href={"/qr-generator"}>
              <Button className="bg-purple-600">QR Generator</Button>
            </Link>
            <Link href={"/qr-scanner"}>
              <Button className="bg-green-400">QR Scanner</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
