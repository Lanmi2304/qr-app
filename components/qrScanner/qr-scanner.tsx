"use client";

import { QRContext } from "@/context/qr-context";

import { Scanner, useDevices } from "@yudiel/react-qr-scanner";
import { useContext, useEffect, useState } from "react";

import SelectEl from "../select/Select";

const QRScanner = () => {
  const { hisHandler } = useContext(QRContext);
  const [result, setResult] = useState("");
  const [mounted, setMounted] = useState(false);
  const devices = useDevices();
  const [deviceID, setDeviceID] = useState("");

  useEffect(() => {
    setMounted(true);
    if (
      !mounted ||
      !devices ||
      !devices[0] ||
      devices[0].deviceId.trim() === ""
    )
      return;
    // console.log(deviceID);
    setDeviceID(devices[0].deviceId);
    // console.log(devices[0].deviceId);
  }, [mounted, deviceID, devices]);
  // console.log(deviceID);
  return (
    <>
      <div className="h-screen w-screen overflow-hidden flex items-center justify-center ">
        {!result && !deviceID && (
          <div className="w-96 m-auto mt-8 flex flex-col justify-center">
            <h1 className="text-center text-3xl text-text mb-4 mt-20">
              Scan your QR code:
            </h1>

            <SelectEl
              items={devices}
              labelTitle="Select a device"
              label="Devices"
              value={deviceID}
              setValue={setDeviceID}
            />

            <div className="px-4">
              <Scanner
                onScan={(result) => {
                  hisHandler(result[0].rawValue);
                  setResult(result[0].rawValue);
                }}
                constraints={{
                  deviceId: deviceID,
                }}
              />
            </div>
          </div>
        )}
        {result && (
          <h2 className="-mt-40 text-center">
            <span className="text-green-600 font-semibold">Success:</span>{" "}
            <a href={result} target="__blank" className="text-text">
              {result}
            </a>
          </h2>
        )}
      </div>
    </>
  );
};

export default QRScanner;
