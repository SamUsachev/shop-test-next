import { fetcher } from "@/helpers/fetcher";
import Image from "next/image";
import { useSWRConfig } from "swr"

import styles from "../../styles/card.module.scss"
import AddCard from "./AddCard";

interface CardInterface {
    id: string,
    title: string,
    price: number,
    description: string,
    image: string
};

const Card = ({ id, title, price, description, image }: CardInterface) => {

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
            <AddCard {...{ id, title, price, description, image }} />
        </div>
    )

}

export default Card

