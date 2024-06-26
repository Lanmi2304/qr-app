"use client";

import { QRContext } from "@/context/qr-contex";
import { FormEvent, useContext, useRef, useState } from "react";
import Button from "../buttons/Button";
import Text from "../paragraphs/Text";

export default function GenerateQR() {
  const { generate } = useContext(QRContext);
  const [errorMessage, setErrorMesage] = useState("");
  const [inputText, setInputText] = useState("");

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
      className="w-screen flex flex-col mx-auto mt-28 items-center justify-center p-8 font-bold text-center gap-4 mb-8"
      onSubmit={(e) => {
        formSubmitHandler(e);
      }}
    >
      <label htmlFor="name" className="text-text text-3xl">
        Enter URL to encode:
      </label>
      <h1 className="text-text">Generate QR: --Enter text below --</h1>
      <input
        ref={inpRef}
        id="name"
        placeholder="Enter text to generate"
        className="bg-transparent border-2 border-purple-600 rounded-md p-2 text-text focus:border-white"
      />
      <Button type="submit">Generate QR</Button>
      {errorMessage && <Text error={true}>{errorMessage}</Text>}
      {inputText && <Text>{inputText}</Text>}
    </form>
  );
}
