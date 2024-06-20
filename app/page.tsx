import Link from "next/link";
import Button from "@/components/buttons/Button";

export default function Home() {
  return (
    <>
      <section className="w-screen h-screen flex items-center justify-center relative m-auto">
        <div className="flex flex-col px-8">
          <h1 className="text-3xl font-semibold mb-8 text-gray-700">
            <span className="text-blue-600">Create</span> or{" "}
            <span className="text-green-600">Scan</span> your{" "}
            <span className="text-orange-400">QR</span>
          </h1>

          <div className="flex justify-evenly">
            <Button href={"/qr-generator"} gen>
              QR Generator
            </Button>
            <Button href={"/qr-scanner"}>QR Scanner</Button>
          </div>
        </div>
      </section>
      {/* <h1>Chosee between</h1>
      <Link href="/qr-generator">
        <h2>QR Code Generator</h2>
      </Link> */}
    </>
  );
}
