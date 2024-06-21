"use client";

import { createContext, useState } from "react";

type CtxType = {
  url?: string;
  generate: (url: string) => void;
  resetUrl: (url: string) => void;
};

export const QRContext = createContext<CtxType>({
  url: "",
  generate: (url: string) => {},
  resetUrl: (url: string) => {},
});

export default function QRCTXProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [url, setUrl] = useState<string>("");

  const generateHandler = (url: string) => {
    setUrl(url);
  };

  const ctxValue = {
    url,
    generate: generateHandler,
    resetUrl: setUrl,
  };

  return <QRContext.Provider value={ctxValue}>{children}</QRContext.Provider>;
}
