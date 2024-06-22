"use client";

import { createContext, useEffect, useState } from "react";

type HisEl = {
  date: string;
  text: string;
}[];

type CtxType = {
  url?: string;
  his: HisEl;
  generate: (url: string) => void;
  resetUrl: (url: string) => void;
  hisHandler: (url: string) => void;
};

export const QRContext = createContext<CtxType>({
  url: "",
  his: [],
  generate: (url: string) => {},
  resetUrl: (url: string) => {},
  hisHandler: (url: string) => {},
});

export default function QRCTXProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [url, setUrl] = useState<string>("");
  const [his, setHis] = useState<HisEl>([]);

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

  const ctxValue = {
    url,
    his,
    generate: generateHandler,
    resetUrl: setUrl,
    hisHandler: scanHistoryHandler,
  };

  return <QRContext.Provider value={ctxValue}>{children}</QRContext.Provider>;
}
