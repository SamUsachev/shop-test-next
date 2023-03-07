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
            "http://localhost:3004/cart",
            fetcher('http://localhost:3004/cart', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ id, title, price, description, image })
            }),
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
            <div className={styles.add}>
                <div>
                    <button onClick={handleAddToCart}>
                        В корзину
                    </button>

                    <div className={styles.counter}>
                        <b>-</b>
                        <span>1</span>
                        <b>+</b>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Card

