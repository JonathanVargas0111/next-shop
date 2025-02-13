import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function(){
    return(
        <div className="flex justify-center items-center h-[800px]">
            
            <IoCartOutline size={80} className="mx-5" />
            <div className="flex flex-col items-center">
                <h1 className="text-xl font-semibold">Your cart is empty</h1>
                <p className="text-gray-500">Add items to your cart to get started.</p>

                <Link href={"/"}
                    className=" text-blue-500 mt-2 text-4xl underline"
                >
                    Go to products
                </Link>

            </div>


        </div>
    )   
}