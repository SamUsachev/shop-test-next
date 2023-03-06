import Image from "next/image";
import Link from "next/link";
import styles from '../../styles/header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href={'/'}>
                <Image src='/images/skvrd.jpg' alt="Сковорода" width={50} height={50} />
            </Link>
            <Link href={'/favourites'}>
                <Image src='/images/favourites.png' alt="favourites" width={35} height={35} />
            </Link>
            <Link href={'/cart'}>
                <Image src='/images/cart.png' alt="cart" width={35} height={35} />
            </Link>
        </header>

    );
};

export default Header;