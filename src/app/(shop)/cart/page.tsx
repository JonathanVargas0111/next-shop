import Link from "next/link";
import Image from "next/image";
import { initialData } from '@/seed/seed'

import { QuantitySelector, Title } from "@/components";
import { BiTrash } from "react-icons/bi";


const productInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]



export default function () {
    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
            <div className="flex flex-col w-[1000px]">
                <Title title="Cart" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10" >
                    <div className="flex flex-col mt-5">
                        <span className="text-xl">Add more items </span>
                        <Link href={"/"}
                            className="undeline mt-5">
                            View more products
                        </Link>
                        <div className="flex flex-col gap-4" >

                            {
                                productInCart.map((product) => (
                                    <div key={product.slug} className="flex py-3">
                                        <Image
                                            src={`/products/${product.images[0]}`}
                                            width={100}
                                            height={100}
                                            style={{
                                                width: "100px",
                                                height: "100px",
                                            }}
                                            alt={product.title}
                                            className="mr-5 rounded"
                                        />
                                        <div className="w-full ">
                                            <div className="w-full min-w-full grid grid-cols-5 gap-2">
                                                <p className="col-span-4">{product.title}</p>
                                            <button className="underline col-span-1"><BiTrash className="w-6 h-6 text-red-600" /></button>
                                            </div>
                                            <p>$ {product.price}</p>
                                            <QuantitySelector quantity={1} />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* Checkout */}
                    <div className="bg-white rounded-xl sahdow-xl p-7">
                        <h2 className="text-2xl mb-2 font-semibold">Checkout</h2>
                        <div className="grid grid-cols-2">
                            <span>No Products</span>
                            <span className="text-right"> 3 items</span>

                            <span>Sub total</span>
                            <span className="text-right"> $ 100</span>

                            <span>Taxes</span>
                            <span className="text-right"> $ 100</span>

                            <span className="mt-5 text-2xl">Total</span>
                            <span className="text-right">$ 100</span>

                        </div>
                        <div className="mt-5 mb-2 w-full">
                            <Link
                                href={"/checkout/address"}
                                className="flex btn-primary justify-center"
                            >
                                Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}