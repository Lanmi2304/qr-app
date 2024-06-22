"use client";

import { Scanner, useDevices } from "@yudiel/react-qr-scanner";
import { Container } from "postcss";
import { useEffect, useState } from "react";
const QRScanner = () => {
  const [result, setResult] = useState<string>("");
  const devices = useDevices();
  const [deviceId, setDeviceId] = useState<string | undefined>(undefined);

  console.log(deviceId);

  const stylesOptions = {
    container: {
      padding: "1rem",
    },
    video: {
      "& svg": {
        fill: "blue",
      },
    },
  };

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
              className="mb-8 text-white bg-transparent border-0 w-40 m-auto"
            >
              <option
                className="bg-bg text-white text-center"
                value={undefined}
              >
                Select a device
              </option>
              {devices.map((device, index) => (
                <option
                  key={index}
                  className="text-white bg-bg"
                  value={device.deviceId}
                >
                  {device.label}
                </option>
              ))}
            </select>

            <Scanner
              onScan={(result) => {
                // console.log(result);
                setResult(result[0].rawValue);
              }}
              constraints={{
                deviceId: deviceId,
              }}
              styles={stylesOptions}
            />
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
