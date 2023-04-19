import { useEffect, useState } from 'react';
import Head from 'next/head';
import PokemonCard from '@/components/pokemonCard';
import PokemonLogo from '../../../public/pokemon-name-img.png';
import PokedexImg from '../../../public/pokedex-img.png';
import styles from '../../styles/css.modules/pokedex.module.css';
import Image from 'next/image';

export default function Pokedex() {

  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      })
  }, [offset]);

  function nextPokemonPage() {
    if(offset <= 1261){
      setOffset(offset+20);
    }    
  }

  function previousPokemonPage() {
    if(offset >= 10){
       setOffset(offset-20);
    }
  }

  return (
      <>
          <Head>
            <title>Pokedex</title>            
          </Head>
          
          <div className={styles.nav_menu}>
            <h1>Bem vindo a sua Pokedex! <Image src={PokedexImg} width={50} alt='Pokedex Image'/></h1>
            <h2>Aqui você vai encontrar dados sobre cada <Image src={PokemonLogo} width={60} alt='Pokémon Logo'/> descobertos até hoje! UAU!!!</h2>
            <h2>Clique no pokemon desejado para ver mais informações!</h2>
            <button onClick={previousPokemonPage} className={styles.btn}>Página anterior</button>
            <p>{offset+1} - {offset+20}</p>
            <button onClick={nextPokemonPage} className={styles.btn}>Próxima página</button>
          </div>

          <div className={styles.pokedex}>
          {
            data.map((e, index) => (
              <PokemonCard pokemonId={(index + 1 + offset).toString()} keyCard={(index + 1 + offset).toString()} pokemonName={e.name} imageURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1 + offset}.png`}/> 
            )) 
          }
          </div>
      </>
  )
}