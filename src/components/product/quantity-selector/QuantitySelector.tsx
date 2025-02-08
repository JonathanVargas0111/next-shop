'use client'
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
    quantity: number;
}

export function QuantitySelector({ quantity }: Props) {


    const [count, setCount] = useState(5);

    const onQuantityChange = (value: number) => {
        if (count + value < 1) return;
        setCount(count + value);
    }

    return (
        <div>

            <h3 className="font-bold text-lg">Quantity</h3>

            <div className="flex py-5 gap-2">
                <button
                    onClick={() => onQuantityChange(- 1)}
                    className="border p-2 hover:underline text-lg">
                    <IoRemoveCircleOutline />
                </button>
                <span className="flex items-center justify-center w-16 mx-3 px-5 bg-gray-200 rounded">
                    {count}
                </span>

                <button
                    onClick={() => onQuantityChange(1)}
                    className="border p-2 hover:underline text-lg">
                    <IoAddCircleOutline />
                </button>
            </div>
        </div>
    )
}