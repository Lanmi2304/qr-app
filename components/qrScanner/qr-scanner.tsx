"use client";

import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
const QRScanner = () => {
  const [result, setResult] = useState<string>("");
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center ">
        {!result && (
          <div className="w-96 m-auto mt-8">
            <h1 className="text-center font-semibold text-2xl text-green-500 mb-4">
              SCAN:
            </h1>
            <Scanner onScan={(result) => setResult(result[0].rawValue)} />
          </div>
        )}
        {result && (
          <h2 className="-mt-40">
            <span className="text-green-500 font-semibold">Success:</span>{" "}
            <a href={result} target="__blank">
              {result}
            </a>
          </h2>
        )}
      </div>
    </>
  );
};

export default QRScanner;
