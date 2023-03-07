import useSWR from "swr"
import { ProductCart } from '@/types/typesProducts';
import { useState } from 'react';
import { fetcher } from "@/helpers/fetcher";

import styles from '../styles/cart.module.scss'
import Image from "next/image";

const Cart = () => {
    const { data, error, mutate } = useSWR<ProductCart[]>("http://localhost:3004/cart", fetcher)
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
                            <span>{el.price}</span>
                            <p className={styles.description}>{el.description}</p>
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