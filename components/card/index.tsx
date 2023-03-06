import { fetcher } from "@/helpers/fetcher";
import Image from "next/image";
import { useSWRConfig } from "swr"


import styles from "../../styles/card.module.scss"

interface CardInterface {
    id: string,
    title: string,
    price: number,
    description: string,
    image: string
};

const Card = ({ id, title, price, description, image }: CardInterface) => {
    const { mutate } = useSWRConfig()

    const handleAddToCart = () => {
        mutate(
            "http://localhost:3004/product",
            fetcher('http://localhost:3004/product'), {}

        )
    }
    return (
        <div className={styles.card}>
            <Image src={image} width={220} height={220} alt={title} />
            <span className={styles.title}>
                {title}
            </span>
            <div className={styles.price}>
                <span>{price} руб.</span>
                <small>/шт</small>
            </div>
            <div>
                <button onClick={handleAddToCart} className={styles.addCart}>В корзину</button>
                <div>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
            </div>
        </div>

    )

}

export default Card

