"use client";

import { Scanner, useDevices } from "@yudiel/react-qr-scanner";
import { useEffect, useState } from "react";
const QRScanner = () => {
  const [result, setResult] = useState<string>("");
  const devices = useDevices();
  const [deviceId, setDeviceId] = useState<string | undefined>(undefined);

  console.log(deviceId);

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center ">
        {!result && (
          <div className="w-96 m-auto mt-8">
            <h1 className="text-center font-semibold text-2xl text-green-500 mb-4">
              SCAN:
            </h1>

            <select onChange={(e) => setDeviceId(e.target.value)}>
              <option value={undefined}>Select a device</option>
              {devices.map((device, index) => (
                <option key={index} value={device.deviceId}>
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
            />
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
