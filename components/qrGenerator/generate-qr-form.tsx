"use client";

import { QRContext } from "@/context/qr-contex";
import { FormEvent, useContext, useRef, useState } from "react";

export default function GenerateQR() {
  const { generate } = useContext(QRContext);
  const [errorMessage, setErrorMesage] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");

  const inpRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inpRef.current) return;

    if (inpRef.current.value.trim() === "") {
      setErrorMesage("Input must not be empty");
    } else {
      setInputText(inpRef.current.value);
      generate(inpRef.current.value);
    }

    const formElement = e.target as HTMLFormElement;
    formElement.reset();
  };

  return (
    <form
      className="w-96 flex flex-col m-auto mt-4 items-center justify-center px-8 py-8 text-blue-500 font-bold text-center gap-4 mb-8"
      onSubmit={(e) => {
        formSubmitHandler(e);
      }}
    >
      <label htmlFor="name">Enter URL to encode:</label>
      <h2>
        <span className="text-orange-400">NOTE:</span> Please make sure that you
        are following - <span className="text-orange-400">https://</span>
        www.example.com - convenction
      </h2>
      <input
        type="text"
        ref={inpRef}
        id="name"
        className="border-2 border-blue-400 font-normal"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500 hover:underline"
      >
        Generate QR
      </button>
      {errorMessage && <p className="text-red-400">{errorMessage}</p>}
      {inputText && (
        <p className="text-green-400 mt-8 -mb-8 text-2xl">{inputText}</p>
      )}
    </form>
  );
}
