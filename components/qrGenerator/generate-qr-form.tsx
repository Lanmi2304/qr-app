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
      setErrorMesage("");
      setInputText(inpRef.current.value);
      generate(inpRef.current.value);
    }

    const formElement = e.target as HTMLFormElement;
    formElement.reset();
  };

  return (
    <form
      className="w-screen flex flex-col m-auto mt-28 items-center justify-center px-8 py-8 font-bold text-center gap-4 mb-8"
      onSubmit={(e) => {
        formSubmitHandler(e);
      }}
    >
      <label htmlFor="name" className="text-white text-3xl">
        Enter URL to encode:
      </label>
      <h2 className="text-purple-400 text-xl truncate">
        Generate QR: --Enter text below --
      </h2>
      <input
        type="text"
        ref={inpRef}
        id="name"
        className="border-2 border-purple-400 font-normal text-white bg-transparent rounded-md py-2 px-4"
      />
      <button
        type="submit"
        className="bg-purple-500 text-white rounded-md px-4 py-2 hover:bg-transparent hover:text-purple-500 hover:border-2 hover:border-purple-500 hover:underline"
      >
        Generate QR
      </button>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {inputText && (
        <p className="text-gray-200 mt-8 -mb-8 px-4 text-md">{inputText}</p>
      )}
    </form>
  );
}
