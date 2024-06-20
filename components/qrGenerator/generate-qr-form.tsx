"use client";

import { QRContext } from "@/context/qr-contex";
import { FormEvent, useContext, useRef } from "react";

export default function GenerateQR() {
  const { generate } = useContext(QRContext);

  const inpRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (inpRef.current) generate(inpRef.current.value);

    if (inpRef.current?.value.trim() === "")
      throw new Error("INP DOESNT EXIST");
  };
  return (
    <form
      onSubmit={(e) => {
        formSubmitHandler(e);
      }}
    >
      <label htmlFor="name">Enter URL to encode:</label>
      <input type="text" ref={inpRef} id="name" className="border-2" />
      <button type="submit">Generate QR</button>
    </form>
  );
}
