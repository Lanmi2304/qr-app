"use client";

import { QRContext } from "@/context/qr-contex";
import { useContext } from "react";
import { dateFormater } from "@/lib/date-formater";

export default function ScanHistory() {
  const { his } = useContext(QRContext);

  return (
    <>
      <div className="w-screen flex justify-center items-center mt-16 flex-col">
        {his.length === 0 && (
          <h1 className="text-pink-600 font-semibold text-center mt-80 px-4 text-2xl">
            Could not find any link, make sure to generate some!
          </h1>
        )}

        {his.length > 0 && (
          <h1 className="text-gray-300 text-xl mb-4">Links history: </h1>
        )}
        <ul>
          {his.map((link) => (
            <div
              key={link.text}
              className="bg-bgk w-screen max-h-60 mb-4 flex flex-col overflow-hidden"
            >
              <p className="mt-4 text-gray-300 pb-4 px-4">
                <span className="font-semibold text-xl text-pink-800">
                  Generated link:{" "}
                </span>
              </p>
              <p className="text-gray-300 -mt-2 mb-2 px-4">
                {dateFormater(link.date)}
              </p>
              <a
                href={link.text}
                target="__blank"
                className="text-gray-300 px-4 pb-4"
              >
                {link.text}
              </a>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
