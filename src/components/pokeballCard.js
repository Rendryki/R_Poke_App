import styles from '../styles/css.modules/pokeballCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function PokeballCard({pokeballName, imageURL}){

    return(
        <Link className={styles.dinamic_link} href={`/pokeItens/pokeballs/${pokeballName}`}>
        <div className={styles.pokeball_Card}>
            <Image className={styles.pokeball_IMG} width={200} height={200} src={imageURL} alt={pokeballName}/>
            <h1>{pokeballName}</h1>
        </div>
        </Link>
    )
}