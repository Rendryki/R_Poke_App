import Image from "next/image";
import Link from "next/link";
import styles from '../styles/css.modules/itensMenu.module.css';

export default function ItensMenu({ImgURL, ImgALT, Text, DestinationLink}){
    return (
        <Link className={styles.card} href={DestinationLink}>
            <Image width={300} height={300} src={ImgURL} alt={ImgALT}/>
            <h1>{Text}</h1>
        </Link>
    )
}