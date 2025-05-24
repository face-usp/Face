"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";


export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-colors duration-500 ${isLoading ? "bg-white" : "bg-gray-300"}`}>
      {isLoading ? <Loader /> : <>
        
        {children}
      </>}
    </div>
  );
}