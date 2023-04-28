import Head from 'next/head';
import PokeballCard from '@/components/pokeballCard';
import styles from '../../../styles/css.modules/pokeballs.module.css';
import Image from 'next/image';
import PokemonLogo from '../../../../public/pokemon-name-img.png';
import PaginaAnteriorBtn from '@/components/paginaAnteriorBtn';
import { v4 as uuidv4 } from 'uuid';

export async function getStaticProps() {
  const SpecialPokeballsres = await fetch(`https://pokeapi.co/api/v2/item-category/33/`);
  const SpecialPokeballsdata = await SpecialPokeballsres.json();
  const SpecialPokeballs = SpecialPokeballsdata.items;

  const StandardPokeballsres = await fetch(`https://pokeapi.co/api/v2/item-category/34/`);
  const StandardPokeballsdata = await StandardPokeballsres.json();
  const StandardPokeballs = StandardPokeballsdata.items;

  const ApricornPokeballsres = await fetch(`https://pokeapi.co/api/v2/item-category/39/`);
  const ApricornPokeballsdata = await ApricornPokeballsres.json();
  const ApricornPokeballs = ApricornPokeballsdata.items;

  return { props: { SpecialPokeballs, StandardPokeballs, ApricornPokeballs } }
}

export default function Pokeballs({ SpecialPokeballs, StandardPokeballs, ApricornPokeballs }) {
  
    return (
      <>
      <Head>
            <title>Pokeitens</title>            
      </Head>
      <div className={styles.pokeballs_page_heading}>
      <PaginaAnteriorBtn PaginaAnteriorPath='/pokeItens/' Text='Página anterior'/>
      <h1>Olá, aqui você pode acessar as principais Pokebolas do universo <Image src={PokemonLogo} alt="Logo pokemon" height={30} width={70}/>!</h1>
      <h2>Clique na Pokebola escolhida para ver mais sobre ela!</h2>
      </div>
      <div className={styles.pokeballs_page}>
      {
        StandardPokeballs.map((e) => ( 
          <PokeballCard key={uuidv4()} pokeballName={e.name} imageURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${e.name}.png`}/>
        ))
      }
      {
        ApricornPokeballs.map((e) => ( 
          <PokeballCard key={uuidv4()} pokeballName={e.name} imageURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${e.name}.png`}/>
        ))
      }
      {
        SpecialPokeballs.map((e) => ( 
          <PokeballCard key={uuidv4()} pokeballName={e.name} imageURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${e.name}.png`}/>
        ))
      }
      </div>
      </>
  )
}