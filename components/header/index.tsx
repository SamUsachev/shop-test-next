import Image from "next/image";
import Link from "next/link";
import styles from '../../styles/header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href={'/'} className={styles.logo}>
                <Image src='/images/logo.png' alt="logo" width={240} height={50} />
            </Link>
            <div className={styles.rightMenu}>
                <Link href={'/favourites'}>
                    <Image src='/images/favourites.png' alt="favourites" width={35} height={35} />
                    <p>Избранное</p>
                </Link>
                <Link href={'/cart'}>
                    <Image src='/images/cart.png' alt="cart" width={35} height={35} />
                    <p>Корзина</p>
                </Link>
            </div>
        </header>

    );
};

export default Header;