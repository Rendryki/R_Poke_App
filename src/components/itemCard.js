import styles from '../styles/css.modules/itemCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function ItemCard({keyCard, ItemName, imageURL}){

    return(
        <Link className={styles.dinamic_link} href={`/pokeItens/pokemonItens/${ItemName}`}>
        <div className={styles.item_Card} key={keyCard}>
            <Image className={styles.item_IMG} width={100} height={100} src={imageURL} alt={ItemName}/>
            <h1>{ItemName}</h1>
        </div>
        </Link>
    )
}