"use client";

import { QRContext } from "@/context/qr-context";
import { useQRCode } from "next-qrcode";
import { useContext, useEffect } from "react";

export default function QRGenerator() {
  const { Canvas } = useQRCode();
  const { url } = useContext(QRContext);

  if (url)
    return (
      <div className="m-auto flex justify-center mb-8">
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
      </div>
    );

  return (
    <>
      <p></p>
    </>
  );
}
