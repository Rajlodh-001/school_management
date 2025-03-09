import Image from "next/image";
import Link from "next/link";


export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <Link href="/admin">
        <div className="px-6 py-2 bg-sky-300 rounded-md text-lg cursor-pointer flex flex-row min-w-[300px] justify-around">
         LogIn -{">"} Admin Page 
         <Image alt="" src="/login.png" height={30} width={30} ></Image>
        </div>
        
         
        
      </Link>

     
    </div>
  );
}
