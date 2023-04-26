import Link from "next/link";
import styles from '../styles/css.modules/paginaAnteriorBtn.module.css';

export default function PaginaAnteriorBtn({PaginaAnteriorPath, Text}){
    return(
        <Link className={styles.btn} href={PaginaAnteriorPath}>{Text}</Link>
    )
}