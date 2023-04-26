import Link from "next/link";
import PaginaAnteriorBtn from "@/components/paginaAnteriorBtn";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from '../../styles/css.modules/[pokedex].module.css';
import ErrorIMG from '../../../public/pikachu-sad-error-image.png';

export default function Pokedex({}){

    const router = useRouter();
    const pokemonId = router.query.pokedex;  
    
    const [pokemonInfo, setPokemonInfo] = useState([]);
    const [pageLoaded, setPageLoaded] = useState(false);
    const [sucessfullyLoaded, setSucessfullyLoaded] = useState(false);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
          .then((res) => res.json())
          .then((data) => {
            setPokemonInfo(data);
            setSucessfullyLoaded(true);
          });
          setTimeout(() => {
            setPageLoaded(true);
          }, 1000);
      }, []);
      
    return(
        <div className={styles.page}>
        <PaginaAnteriorBtn PaginaAnteriorPath='/pokedex/' Text='Página anterior'/>
        <div className={styles.pokemon_info}>
        {pageLoaded?
        sucessfullyLoaded? 
            <>
            <h1>{pokemonInfo.name}</h1>
            <Image width={300} height={300} key={`pokemon${pokemonId}`} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt={`image ${pokemonInfo.name}`}/>
            <p className={styles.pokemon_id}>#{pokemonId}</p>
        
                <div>
                {
                    pokemonInfo.types?.map((type) => (
                    <span className={`${styles.pokemon_type} ${styles[type.type.name]}`}>{type.type.name}</span>
                    ))
                }
                </div>
                <div>
                {
                    pokemonInfo.stats?.map((stats) => (
                    <span className={styles.pokemon_stats}>{stats.stat.name}: {stats.base_stat}</span>
                    ))
                }
                </div>
            </>
            :
            <>
            <h1>Ops... ocorreu algum erro! :(</h1>
            <Image src={ErrorIMG} width={300} height={200} alt='Sad pikachu error image'/>
            <Link className={styles.voltar_btn_card} href="/pokedex">Voltar pra pagina anterior</Link>
            </>
        :
        <div className={styles.loader}></div>
        }
        </div>
        </div>
    )
}