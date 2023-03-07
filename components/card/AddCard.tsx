import { useSWRConfig } from "swr"
import { fetcher } from "@/helpers/fetcher";
import { ProductCart } from './../../types/typesProducts'

import styles from './../../styles/card.module.scss'

interface AddInterface {
    data: ProductCart
}

const AddCard = ({ data }: AddInterface) => {
    const { mutate } = useSWRConfig()

    const handleAddToCart = () => {
        mutate(
            "http://localhost:3004/cart",
            fetcher('http://localhost:3004/cart', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ data })
            }),

        )
    }
    return (
        <div className={styles.add}>
            <div>
                <button
                    // className={cartAdded ? styles.added : styles.toCart}
                    onClick={handleAddToCart}
                >В корзину
                    {/* {cartAdded ? 'В корзине' : 'В корзину'} */}
                </button>

                <div className={styles.counter}>
                    <b>-</b>

                    <span>1</span>

                    <b>+</b>
                </div>
            </div>
        </div>
    );
};

export default AddCard;