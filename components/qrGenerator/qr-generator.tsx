"use client";
import { QRContext } from "@/context/qr-contex";
import { useQRCode } from "next-qrcode";
import { useContext } from "react";

export default function QRGenerator() {
  const { Canvas } = useQRCode();
  const { url } = useContext(QRContext);

  if (url)
    return (
      <Canvas
        text={`${url}`}
        options={{
          errorCorrectionLevel: "M",
          margin: 3,
          scale: 4,
          width: 300,
          color: {
            dark: "#000000ff",
            light: "#ffffffff",
          },
        }}
      />
    );
  // console.log(Canvas);
  return (
    <>
      <h1>QR is HERE</h1>
    </>
  );
}
