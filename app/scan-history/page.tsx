"use client";

import { QRContext } from "@/context/qr-contex";
import { useContext, useEffect, useState } from "react";

export default function ScanHistory() {
  const { his } = useContext(QRContext);

  return (
    <>
      <div className="w-screen flex justify-center items-center mt-16 flex-col">
        {his.length === 0 && (
          <h1 className="text-orange-500 font-semibold">
            Could not find any link, make sure to generate some!
          </h1>
        )}
        {/* <h1 className="text-gray-600">Generated links count: {his.length}</h1> */}
        {his.length > 0 && <h1 className="text-gray-600">Links history: </h1>}
        <ul className="">
          {his.map((link) => (
            <p className="mt-4 text-orange-600 text-center" key={link}>
              {link}
            </p>
          ))}
        </ul>
      </div>
    </>
  );
}
