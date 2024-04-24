import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">  
      <p className="font-bold py-12">Page numbering</p>
     <Link href='/login' className="p-2 bg-slate-200">
      Visit Products page
     </Link>
    </main>
  );
}
