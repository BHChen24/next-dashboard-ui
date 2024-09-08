"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Homepage = () => {
  const router = useRouter();
  const navigateToAdmin = () => {
    router.push("/admin");
    setClick(true);
  };

  const [click, setClick] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <button
        onClick={navigateToAdmin}
        className="rounded-md border-2 border-neutral-400 px-6 py-3 hover:bg-gray-200 transition font-mono"
      >
        {!click && <p>log in</p>}
        {click && <p>Now Loading...</p>}
      </button>
    </div>
  );
};

export default Homepage;
