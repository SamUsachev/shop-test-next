import Image from "next/image";
import Link from "next/link";
import CartCount from "./CartCount";
import FavouritesCount from "./FavouritesCount";

import styles from '../../styles/header.module.scss'

const Header = () => {

    return (

        <header className={styles.header}>
            <Link href={'/'} className={styles.logo}>
                <Image src='/images/logo.png' alt="logo" width={240} height={50} />
            </Link>
            <div className={styles.rightMenu}>
                <Link href={'/favourites'}>

                    <FavouritesCount />

                    <Image src='/images/favourites.png' alt="favourites" width={35} height={35} />
                    <p>Избранное</p>
                </Link>
                <Link href={'/cart'}>

                    <CartCount />

                    <Image src='/images/cart.png' alt="cart" width={35} height={35} />
                    <p>Корзина</p>
                </Link>
            </div>
        </header>
    );
};

export default Header;