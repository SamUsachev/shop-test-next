import useSWR from "swr"
import { ProductCart } from '@/types/typesProducts';
import { fetcher } from "@/helpers/fetcher";
import Image from "next/image";

import styles from '../styles/cart.module.scss'

const url = "http://localhost:3004/cart/"

const Cart = () => {
    const { data, error, mutate } = useSWR<ProductCart[]>(url, fetcher)

    const handleRemoveToCart = async (id: string) => {
        fetcher(url + id, { method: 'DELETE' })
    }

    return (

        <div className={styles.cart}>
            <h1>Корзина товаров</h1>
            {/* {!data && !error && <div>spinner</div>} */}
            {data && data.length > 0 ? (
                <>
                    {data.map((el) => (
                        <div className={styles.card}>
                            <Image src={el.image} alt='' width={100} height={100} />
                            <span>{el.title}</span>
                            <span>  {el.price} руб.</span>
                            <p className={styles.description}>{el.description}</p>
                            <button className={styles.removeCart} onClick={async () => {
                                await handleRemoveToCart(el.id)
                                mutate(data.filter(a => a.id !== el.id), { revalidate: false })
                            }}>
                                <Image src='/images/delete.png' width={22} height={18} alt='delete' />
                            </button>
                        </div>
                    ))}
                </>
            ) : (
                <div className={styles.cartEmpty}>
                    <h3>Загляните на главную, чтобы выбрать товары</h3>
                    <a className={styles.btnMain} href='/'>На главную</a>
                </div>
            )
            }
        </div>
    );
};



export default Cart;