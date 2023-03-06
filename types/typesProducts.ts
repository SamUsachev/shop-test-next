export type Products = {
    id: string
    title: string
    price: number
    description: string
    image: string

};

export type ProductCard = Required<Products>