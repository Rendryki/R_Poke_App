import { useEffect, useState } from 'react';
import Head from 'next/head';
import PokemonCard from '@/components/pokemonCard';
import styles from '../styles/css.modules/pokedex.module.css';
export default function Pokedex() {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setLoading(true)
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results)
        setLoading(false)
      })
  }, [offset])

  function setnewoffset() {
    setOffset(offset+20)
  }
  console.log(data)

  

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/<<pokemon index>>.png get the images of each pokemon


  return (
      <>
          <Head>
            <title>Pokedex</title>            
          </Head>
          <div className={styles.pokedex}>
          <h1>teste</h1>
          {
            data.map((e, index) => (
              <PokemonCard key={index + 1 + offset} pokemonName={e.name} imageURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1 + offset}.png`}/> 
            )) 
          }
          </div>
          <button onClick={setnewoffset}>click me! {offset}</button>
      </>
  )
}