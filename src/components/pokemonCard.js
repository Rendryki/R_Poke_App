import styles from '../styles/css.modules/pokemonCard.module.css';
import Image from 'next/image';

export default function PokemonCard({key, pokemonName, imageURL}){
    return(
        <div className={styles.pokemon_Card}>
            <Image className={styles.pokemon_IMG} width={200} height={200} key={`pokemon${key}`} src={imageURL} alt={pokemonName}/>
            <h1>{pokemonName}</h1>
        </div>
    )
}