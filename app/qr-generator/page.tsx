import GenerateQR from "@/components/qrGenerator/generate-qr-form";
import QRGenerator from "@/components/qrGenerator/qr-generator";

export default function QRGeneratorPage() {
  return (
    <main>
      <GenerateQR />
      <QRGenerator />
    </main>
  );
}
