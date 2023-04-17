import { useEffect } from 'react';
import Navbar from './components/navbar';

export default function Home() {
/*
  useEffect(
    fetch('https://pokeapi.co/api/v2/pokemon?offset=50&limit=50', {
      method: 'GET'
    }).then(resp => resp.json()).then(resp => console.log(resp))
  ,[])
*/
  return (
      <>
          <Navbar />
          <p>pokedex</p>
      </>
  )
}
