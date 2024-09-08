"use client";
import Image from "next/image";
import { useState } from "react";

import dynamic from "next/dynamic";

const ExampleForm = dynamic(() => import("./ExampleForm"), {
  loading: () => <p>Loading...</p>,
});

export default function FormModal({
  table,
  type,
  data,
  id,
}: {
  table?: string;
  type: string;
  data?: any;
  id?: string;
}) {
  const size = "create" === type ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "delete"
      ? "bg-purple-50"
      : type === "view"
      ? "bg-blue-50"
      : "bg-yellow-50";

  const [open, setOpen] = useState(false);

  const DeleteForm = () => {
    return type === "delete" ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          All date will be lost, are you sure you want to delete this record?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : type === "create" ? (
      <ExampleForm />
    ) : (
      "Other button behaviors"
    );
  };

  return (
    <>
      <button
        className={`${size} ${bgColor} flex items-center justify-center rounded-full `}
        onClick={() => {
          if (type != "view") {
            setOpen(true);
          }
        }}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16}></Image>
      </button>
      {open && (
        <div
          className="w-screen h-screen bg-black bg-opacity-60 absolute left-0 top-0 z-50 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] "
            onClick={(e) => e.stopPropagation()}
          >
            <DeleteForm />
          </div>
        </div>
      )}
    </>
  );
}
