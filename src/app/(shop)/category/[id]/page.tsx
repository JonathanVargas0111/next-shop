import { notFound } from "next/navigation";

import { initialData } from "@/seed/seed";

import { Category } from "@/interfaces";

import { ProductGrid, Title } from "@/components";

interface Props {
    params: { id: Category }
}

export default function ({ params }: Props) {

    const { id } = params;
    const products = initialData.products.filter(product => product.gender === id)

    const label: Record<Category, string> = {
        'men': 'For men',
        'women': 'For Women',
        'kid': 'For Kid',
        'unisex': 'Unisex',
    }

    /* console.log(params);  */

    /* if(id === 'kids') notFound() */

    return (
        <div>
            <Title
                title={label[id].toUpperCase()}
                subtitle={`All products`}
                className="mb-2"
            />
            <ProductGrid products={products} />
        </div>
    )
}