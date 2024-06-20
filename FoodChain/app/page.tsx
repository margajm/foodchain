"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
      console.log("Show Logo");
    }, 6000);
    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);  
  
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-[#c5a30a] via-[#c5a30a] to-[#f2c810] p-2">

      {!showLogo && (
        <Image src="/foochain-video01.gif" alt="Loading..." 
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: 'auto', height: '90%' }}
        className="rounded-xl shadow-xl m-2 ${showLogo ? 'animate-vanish' : ''}"/>
      )}

      {showLogo && (
        <div className="absolute flex flex-col items-center justify-center animate-slide-up">
          {/* <img src="/path-to-your-logo.png" alt="Logo" className="mb-4 w-32 h-32" /> */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Login
          </button>
        </div>
      )}

    </div>
  );
}
