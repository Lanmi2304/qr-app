"use client";

import { createContext, useEffect, useState } from "react";

type CtxType = {
  url?: string;
  his: string[];
  generate: (url: string) => void;
  resetUrl: (url: string) => void;
};

export const QRContext = createContext<CtxType>({
  url: "",
  his: [],
  generate: (url: string) => {},
  resetUrl: (url: string) => {},
});

export default function QRCTXProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [url, setUrl] = useState<string>("");
  const [his, setHis] = useState<string[]>([]);

  useEffect(() => {
    if (localStorage.getItem("qr-links")) {
      setHis(JSON.parse(localStorage.getItem("qr-links") ?? ""));
    }
  }, []);

  const generateHandler = (url: string) => {
    setUrl(url);

    const updatedArray = [url, ...his];
    setHis(updatedArray);
    localStorage.setItem("qr-links", JSON.stringify(updatedArray));
  };

  const ctxValue = {
    url,
    his,
    generate: generateHandler,
    resetUrl: setUrl,
  };

  return <QRContext.Provider value={ctxValue}>{children}</QRContext.Provider>;
}
