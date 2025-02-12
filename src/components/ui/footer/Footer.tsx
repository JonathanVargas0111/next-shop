import { titleFont } from "@/config/fonts";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className=" py-4">
            <div className="container mx-auto text-center text-black">
                <Link
                    href={"/"}
                    >
                        <span className={`${titleFont.className} antialiased font-bold`}>
                            EcomBase 
                        </span>
                        <span className=""> | shop </span>

                        <span className="">
                             &copy; { new Date().getFullYear()} 
                        </span>
                </Link>
                <Link
                    href={"/"}
                >
                    <span className="">
                         | privacy policy
                    </span>
                </Link>
            </div>
        </footer>
    );
};