import Button from "@/components/buttons/Button";

export default function Home() {
  return (
    <>
      <section className="w-screen h-screen flex items-center justify-center relative m-auto">
        <div className="flex flex-col px-8">
          <h1 className="text-4xl font-semibold mb-8 text-gray-100 text-center">
            <span className="text-purple-600">Create</span> or{" "}
            <span className="text-green-400">Scan</span> your{" "}
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
    </>
  );
}
