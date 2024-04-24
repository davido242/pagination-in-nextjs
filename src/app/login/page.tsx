"use client";

import Image from "next/image";
import Pagination from "@/components/Pagination";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div className="bg-red-500 p-12">
      <p className="font-bold">Page Numbering</p>
      <Pagination />
     </div>
    </main>
  );
}
