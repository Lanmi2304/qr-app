"use client";

import Link from "next/link";
import QrScanner from "qr-scanner";
import { useEffect, useRef, useState } from "react";

export default function QRScanner() {
  const [currURL, setCurrURL] = useState<string>("");
  const videoElem = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoElem.current) {
      const qrScanner = new QrScanner(videoElem.current, (result) => {
        console.log(currURL);
        setCurrURL(result);
      });

      qrScanner.start();

      return () => {
        qrScanner.stop();
      };
    }
  }, [currURL]);

  return (
    <>
      {!currURL && <video ref={videoElem} width={600}></video>}
      {currURL && (
        <Link href={currURL} target="_blank">
          {currURL}
        </Link>
      )}
    </>
  );
}
