import { useSWRConfig } from "swr"
import { fetcher } from "@/helpers/fetcher";
import Image from "next/image";

import styles from './../../styles/card.module.scss'

interface AddInterface {
    id: string,
    title: string,
    price: number,
    description: string
    image: string,
}

const AddCard = ({ id, title, price, description, image }: AddInterface) => {

    const { mutate } = useSWRConfig()

    const handleAddToFavourites = () => {
        mutate(
            "http://localhost:3004/favourites",
            fetcher('http://localhost:3004/favourites', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ id, title, price, description, image })
            }),
        )
    }

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
            <Image onClick={handleAddToFavourites} src='/images/favourites.png' width={19} height={16} alt='to favorites' />
        </div>

    );
};

export default AddCard;