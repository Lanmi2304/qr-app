"use client";

import { QRContext } from "@/context/qr-context";
import { useContext } from "react";
import { dateFormatter } from "@/lib/date-formatter";

export default function ScanHistory() {
  const { his } = useContext(QRContext);

  return (
    <>
      <div className="w-screen flex justify-center items-center mt-16 flex-col">
        {his.length === 0 && (
          <h1 className="text-text font-semibold text-center mt-80 px-4 text-2xl">
            Could not find any link, make sure to generate some!
          </h1>
        )}

        {his.length > 0 && (
          <h1 className="text-text text-xl mb-4">Links history: </h1>
        )}
        <ul>
          {his.map((link) => (
            <div
              key={link.text}
              className="bg-bgk w-screen max-h-60 mb-4 flex flex-col overflow-hidden"
            >
              <p className="mt-4 text-gray-300 pb-4 px-4">
                <span className="font-semibold text-xl text-span-purple">
                  Generated link:{" "}
                </span>
              </p>
              <p className="text-text -mt-2 mb-2 px-4">
                {dateFormatter(link.date)}
              </p>
              <a
                href={link.text}
                target="__blank"
                className="text-text px-4 pb-4"
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
