"use client";

import { QRContext } from "@/context/qr-contex";
import { useQRCode } from "next-qrcode";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { useContext, useEffect } from "react";

export default function QRGenerator() {
  const { Canvas } = useQRCode();
  const { url, resetUrl } = useContext(QRContext);

  useEffect(() => {
    if (url) {
      resetUrl("");
    }
  }, []);

  if (url)
    return (
      <div className="m-auto flex justify-center">
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
  // console.log(Canvas);
  return (
    <>
      <p></p>
    </>
  );
}
