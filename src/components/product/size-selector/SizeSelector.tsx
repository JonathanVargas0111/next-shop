import { Size } from "@/interfaces";
import clsx from "clsx";

interface Props {
    selectedSize: Size;
    avaliabelSizes: Size[];
}

export default function SizeSelector({ selectedSize, avaliabelSizes }: Props) {
    return (
        <div className="my-5 ">
            <h3 className="font-bold text-lg"> Size </h3>
            <div className="flex gap-2 py-5">
                {
                    avaliabelSizes.map(size => (
                        <button
                            key={size}
                            className={clsx("border p-2 hover:underline text-lg",
                                {
                                    "underline": size === selectedSize
                                }
                            )}
                        >
                            {size}
                        </button>
                    ))
                }
            </div>

        </div>
    );
}