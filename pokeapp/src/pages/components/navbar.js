import Link from 'next/link';
import Logo from '../../../public/pokeball-image.png';
import Image from "next/image";
import styles from '../../styles/css.modules/navbar.module.css';

export default function Navbar(){
    return (
        <div className={styles.navbar_div}>
        <Image className={styles.navbar_image} src={Logo} alt="Logo pokeball" />
        <h1 className={styles.navbar_title}>PokéApp</h1>
        <Link className={styles.navbar_links} href='/pokedex'>Pokedex</Link>
        <Link className={styles.navbar_links} href='/'>Home</Link>
        </div>
    )
}