"use client";

import QRScanner from "@/components/qrScanner/qr-scanner";
import { useEffect, useState } from "react";

export default function QRScannerPage() {
  const [isMediaAccepted, setIsMediaAccepted] = useState(false);

  useEffect(() => {
    if (navigator.mediaDevices) {
      const mediaHandler = async () => {
        await navigator.mediaDevices
          .getUserMedia({ video: true })
          .then(() => {
            setIsMediaAccepted(true);
          })
          .catch(() => {
            setIsMediaAccepted(false);
          });
      };

      mediaHandler().catch(() => {
        setIsMediaAccepted(false);
      });
    }
  }, []);

  return isMediaAccepted ? <QRScanner /> : <div>Media not accepted</div>;
}
