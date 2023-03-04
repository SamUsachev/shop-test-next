import Image from "next/image";
import styles from '../../styles/header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Image src='/images/skvrd.jpg' alt="Сковорода" width={50} height={50} />
            </div>
        </header>

    );
};

export default Header;