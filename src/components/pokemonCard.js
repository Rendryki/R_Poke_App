import styles from '../styles/css.modules/pokemonCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function PokemonCard({keyCard, pokemonName, imageURL, pokemonId}){

    return(
        <Link className={styles.dinamic_link} href={`/pokedex/${pokemonId}`}>
        <div className={styles.pokemon_Card} key={keyCard}>
            <Image className={styles.pokemon_IMG} width={200} height={200} src={imageURL} alt={pokemonName}/>
            <p className={styles.pokemon_id}>#{pokemonId}</p>
            <h1>{pokemonName}</h1>
        </div>
        </Link>
    )
}