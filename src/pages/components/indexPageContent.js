import PokemonLogo from '../../../public/pokemon-name-img.png';
import PokedexImg from '../../../public/pokedex-img.png';
import Image from "next/image";
import styles from '../../styles/css.modules/indexPageContent.module.css';

export default function IndexPageContent(){
    return (
        <div className={styles.page}>
        
        <h1>Bem vindo a sua Pokedex!</h1>
        <p>Aqui você vai encontrar as principais informações sobre seus Pokemons favoritos</p>
        <p>Pesquise e acesse os principais dados sobre seu <Image src={PokemonLogo} width={50} alt="Logo Pokémon" /> desejado de forma rápida e fácil!</p>
        <Image src={PokedexImg} alt="Pokedex Image" />
        
        </div>
    )
}