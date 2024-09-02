import React from "react";

type SinglePageProps = {
    children: React.ReactNode;
    };

export default function SinglePage({children} : SinglePageProps) {
  return (
    <div className="rounded-xl w-[95%] h-[680px] bg-white p-6 flex items-center justify-center">
        {children}
    </div>
  );
}
