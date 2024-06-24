"use client";

import { createContext, useEffect, useState } from "react";
import { useDevices } from "@yudiel/react-qr-scanner";

type HisEl = {
  date: string;
  text: string;
}[];

type CtxType = {
  url?: string;
  his: HisEl;
  currentDevice: string;
  generate: (url: string) => void;
  resetUrl: (url: string) => void;
  hisHandler: (url: string) => void;
  updateDevice: (devId: string) => void;
};

export const QRContext = createContext<CtxType>({
  url: "",
  his: [],
  currentDevice: "",
  generate: (url: string) => {},
  resetUrl: (url: string) => {},
  hisHandler: (url: string) => {},
  updateDevice: (devId: string) => {},
});

export default function QRCTXProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [url, setUrl] = useState("");
  const [his, setHis] = useState<HisEl>([]);
  const [deviceId, setDeviceId] = useState("");

  // const devices = useDevices();

  useEffect(() => {
    if (localStorage.getItem("qr-links")) {
      setHis(JSON.parse(localStorage.getItem("qr-links") ?? ""));
    }
  }, []);

  const generateHandler = (url: string) => {
    setUrl(url);
  };

  const scanHistoryHandler = (url: string) => {
    const newHisObj = {
      date: new Date().toISOString(),
      text: url,
    };

    const updatedArray = [newHisObj, ...his];
    setHis(updatedArray);
    localStorage.setItem("qr-links", JSON.stringify(updatedArray));
  };

  const updateDeviceHandler = (deviceId: string) => {
    setDeviceId(deviceId);
  };

  const ctxValue = {
    url,
    his,
    currentDevice: deviceId,
    generate: generateHandler,
    resetUrl: setUrl,
    hisHandler: scanHistoryHandler,
    updateDevice: updateDeviceHandler,
  };

  return <QRContext.Provider value={ctxValue}>{children}</QRContext.Provider>;
}
