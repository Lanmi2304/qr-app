"use client";

import { QRContext } from "@/context/qr-context";
import { FormEvent, useContext } from "react";
import Button from "../buttons/Button";
import Text from "../paragraphs/Text";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { inputType, input } from "@/lib/scheme";

export default function GenerateQR() {
  const { generate, url } = useContext(QRContext);
  const {
    register,
    handleSubmit,

    reset,
    formState: { errors, isSubmitting },
  } = useForm<inputType>({
    resolver: zodResolver(input),
  });

  const onSubmit: SubmitHandler<inputType> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    generate(data.inputValue);
    reset();
  };

  return (
    <form
      className="w-screen flex flex-col mx-auto mt-28 items-center justify-center p-8 font-bold text-center gap-4 mb-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="name" className="text-text text-3xl">
        Enter URL to encode:
      </label>
      <h1 className="text-text">Generate QR: --Enter text below --</h1>
      <input
        {...register("inputValue")}
        id="name"
        placeholder="Enter text to generate"
        className="bg-transparent border-2 border-purple-600 rounded-md p-2 text-text focus:border-white"
      />
      {errors.inputValue && (
        <p className="text-red-500">{errors.inputValue.message}</p>
      )}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Generating QR..." : "Generate QR"}
      </Button>
      <Text>{url}</Text>
    </form>
  );
}
