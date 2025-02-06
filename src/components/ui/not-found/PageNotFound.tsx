import { titleFont } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";

export default function PageNotFound() {
    return (
            <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
                <div >
                    <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>
                    <p className="font-semibold text-xl "> Woops! Page not found</p>
                    <p className="font-light">
                        <span>You return to the main page </span>
                        <Link 
                        href={"/"}
                        className="font-normal hover:underline transition-all" 
                        > 
                             Home    
                        </Link>
                    </p>
                </div>

            
            <div className="px-5 mx-5">
                <Image
                    src={"/imgs/starman_750x750.png"}
                    alt="Startman"
                    className="p-5 sm:p-0"
                    width={550}
                    height={550}
                    />
            </div>
                    </div>
        
    )
}