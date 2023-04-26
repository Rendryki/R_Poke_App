import PokemonLogo from '../../public/pokemon-name-img.png';
import PokedexImg from '../../public/pokedex-img.png';
import Image from "next/image";
import styles from '../styles/css.modules/indexPageContent.module.css';

export default function IndexPageContent(){
    return (
        <div className={styles.page}>
        
        <h1>Bem vindo ao PokeApp!</h1>
        <h3>Aqui você vai encontrar as principais informações sobre seus Pokemons favoritos, diversos itens, Pokebolas e muito mais!</h3>
        <h3>Pesquise e acesse os principais dados sobre seu <Image src={PokemonLogo} width={50} alt="Logo Pokémon" /> desejado de forma rápida e fácil!</h3>
        <Image src={PokedexImg} alt="Pokedex Image" />
        
        </div>
    )
}