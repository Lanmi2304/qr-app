"use client";

import { QRContext } from "@/context/qr-context";

import { Scanner, useDevices } from "@yudiel/react-qr-scanner";
import { useContext, useEffect, useState } from "react";

import SelectEl from "../select/Select";

const QRScanner = () => {
  const devices = useDevices();

  const { hisHandler } = useContext(QRContext);
  const [result, setResult] = useState("");
  const [deviceID, setDeviceID] = useState<string | null>(null);

  useEffect(() => {
    if (devices.length) {
      setDeviceID(devices[0].deviceId);
    }
  }, [devices]);

  const formattedDevicesForSelect = devices.map((device) => {
    return {
      label: device.label,
      value: device.deviceId,
    };
  });

  return (
    <>
      <div className="h-screen w-screen overflow-hidden flex items-center justify-center ">
        {!result && (
          <div className="w-96 m-auto mt-8 flex flex-col justify-center">
            <h1 className="text-center text-3xl text-text mb-4 mt-20">
              Scan your QR code:
            </h1>

            {deviceID && (
              <SelectEl
                items={formattedDevicesForSelect}
                labelTitle="Select a device"
                label="Devices"
                value={deviceID}
                setValue={setDeviceID}
              />
            )}

            <div className="px-4">
              <Scanner
                onScan={(result) => {
                  hisHandler(result[0].rawValue);
                  setResult(result[0].rawValue);
                }}
                constraints={{
                  deviceId: deviceID ?? "",
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
