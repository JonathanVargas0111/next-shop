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
                <Title title="Verify your order" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10" >
                    <div className="flex flex-col mt-5">
                        <span className="text-xl">Confirm your order</span>
                        <Link href={"/cart"}
                            className="undeline mt-5">
                            Edit your cart
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
                                            </div>
                                            <p>$ {product.price} X 3</p>
                                            <p>Subttotal: $ {product.price * 2}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* Checkout */}
                    <div className="bg-white rounded-xl sahdow-xl p-7">
                        <div className="mb-10 p-5 border rounded-lg shadow-md ">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">Dirección de Entrega</h2>
                            <div className="space-y-1 text-gray-700">
                                <p><span className="font-medium">Nombre:</span> Pepe</p>
                                <p><span className="font-medium">Dirección:</span> Av 123</p>
                                <p><span className="font-medium">Código Postal:</span> 1234</p>
                                <p><span className="font-medium">Teléfono:</span> 1234 123</p>
                                <p><span className="font-medium">Ciudad:</span> [Ciudad]</p>
                                <p><span className="font-medium">Estado/Región:</span> [Estado/Región]</p>
                                <p><span className="font-medium">País:</span> [País]</p>
                            </div>
                        </div>


                        {/* Divader */}
                        <div className="w-full h-0.5 rounded bg-gray-200"></div>

                        <h2 className="text-2xl mb-2 font-semibold">Summary order</h2>
                        <div>
                            <div className="grid grid-cols-2">
                                <span>No Products</span>
                                <span className="text-right"> 3 items</span>

                                <span>Sub total</span>
                                <span className="text-right"> $ 100</span>

                                <span>Taxes</span>
                                <span className="text-right"> $ 100</span>
                            </div>
                            <div className="w-full flex flex-row items-center justify-between mt-2">
                                <span className="text-2xl font-bold">Total</span>
                                <span className="">$ 100</span>
                            </div>
                        </div>
                        <div className="mt-5 mb-2 w-full">
                            <p className="text-xs text-gray-500 my-2">
                                * Asegúrate de que la información de envío sea correcta para evitar retrasos en la entrega.
                                Al completar tu pedido, aceptas nuestros{" "}
                                <a href="/terminos-y-condiciones" className="text-blue-600 hover:underline">
                                    Términos y Condiciones
                                </a>.
                            </p>

                            <Link
                                href={"/orders/123"}
                                className="flex btn-primary justify-center"
                            >
                                Continue to checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}