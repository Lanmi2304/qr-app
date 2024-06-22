"use client";

import { QRContext } from "@/context/qr-contex";
import { Scanner, useDevices } from "@yudiel/react-qr-scanner";
import { Container } from "postcss";
import { useContext, useEffect, useState } from "react";

const QRScanner = () => {
  const { hisHandler } = useContext(QRContext);
  const [result, setResult] = useState<string>("");
  const devices = useDevices();
  const [deviceId, setDeviceId] = useState<string | undefined>(undefined);

  return (
    <>
      <div className="h-screen w-screen overflow-hidden flex items-center justify-center ">
        {!result && (
          <div className="w-96 m-auto mt-8 flex flex-col justify-center">
            <h1 className="text-center text-3xl text-white mb-4 mt-20">
              Scan your QR code:
            </h1>

            <select
              onChange={(e) => setDeviceId(e.target.value)}
              className="mb-8 text-white bg-transparent border-0 text-sm m-auto"
            >
              <option
                className="bg-bg text-white text-center "
                value={undefined}
              >
                Select a device
              </option>
              {devices.map((device, index) => (
                <option
                  key={index}
                  className="text-white bg-bg text-center"
                  value={device.deviceId}
                >
                  {device.label}
                </option>
              ))}
            </select>
            <div className="px-4">
              <Scanner
                onScan={(result) => {
                  // console.log(result);
                  // setGenerateHis()
                  hisHandler(result[0].rawValue);
                  setResult(result[0].rawValue);
                }}
                constraints={{
                  deviceId: deviceId,
                }}
              />
            </div>
          </div>
        )}
        {result && (
          <h2 className="-mt-40 text-center">
            <span className="text-green-300 font-semibold">Success:</span>{" "}
            <a href={result} target="__blank" className="text-white">
              {result}
            </a>
          </h2>
        )}
      </div>
    </>
  );
};

export default QRScanner;
