import Head from 'next/head';
import PaginaAnteriorBtn from '@/components/paginaAnteriorBtn';
import ItemCard from '@/components/itemCard';
import styles from '../../../styles/css.modules/pokemonItens.module.css';
import Image from 'next/image';
import PokemonLogo from '../../../../public/pokemon-name-img.png';
import { v4 as uuidv4 } from 'uuid';

export async function getStaticProps() {
  const resHealings = await fetch(`https://pokeapi.co/api/v2/item-category/27`);
  const dataHealings = await resHealings.json();
  const HealingsList = dataHealings.items;

  const resRecovery = await fetch(`https://pokeapi.co/api/v2/item-category/28`);
  const dataRecovery = await resRecovery.json();
  const RecoveryList = dataRecovery.items;

  const resEffortBerry = await fetch(`https://pokeapi.co/api/v2/item-category/2`);
  const dataEffortBerry = await resEffortBerry.json();
  const EffortBerryList = dataEffortBerry.items;

  const resMedicineBerry = await fetch(`https://pokeapi.co/api/v2/item-category/3`);
  const dataMedicineBerry = await resMedicineBerry.json();
  const MedicineBerryList = dataMedicineBerry.items;

  const resOtherBerry = await fetch(`https://pokeapi.co/api/v2/item-category/4`);
  const dataOtherBerry = await resOtherBerry.json();
  const OtherBerryList = dataOtherBerry.items;

  const resBattleItem = await fetch(`https://pokeapi.co/api/v2/item-category/43`);
  const dataBattleItem = await resBattleItem.json();
  const BattleItemList = dataBattleItem.items;

  return { props: { HealingsList, RecoveryList, EffortBerryList, MedicineBerryList, OtherBerryList, BattleItemList } }
}

export default function PokemonItens({ HealingsList, RecoveryList, EffortBerryList, MedicineBerryList, OtherBerryList, BattleItemList }) {
  
    return (
      <>
      <Head>
            <title>Pokeitens</title>            
      </Head>
      <div className={styles.pokemonItens_page_page_heading}>
      <PaginaAnteriorBtn PaginaAnteriorPath='/pokeItens/' Text='Página anterior'/>
      <h1>Esta é a página de Itens do universo <Image src={PokemonLogo} alt="Logo pokemon" height={30} width={70}/>!</h1>
      <h2>Aqui você poderá encontrar alguns dos diversos itens existentes e consultar individualmente algumas informações de cada item!</h2>

      <h1 className={styles.pokemonItens__Title}>Remédios e Curas</h1>
      <div className={styles.pokemonItens_page}> 
      {HealingsList.map((e) => (
        <ItemCard key={uuidv4()} ItemName={e.name} imageURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${e.name}.png`}/>
      ))}
      {RecoveryList.map((e) => (
        <ItemCard key={uuidv4()} ItemName={e.name} imageURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${e.name}.png`}/>
      ))}
      </div>

      <h1 className={styles.pokemonItens__Title}>Doces</h1>
      <div className={styles.pokemonItens_page}> 
      {EffortBerryList.map((e) => (
        <ItemCard key={uuidv4()} ItemName={e.name} imageURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${e.name}.png`}/>
      ))}
      {MedicineBerryList.map((e) => (
        <ItemCard key={uuidv4()} ItemName={e.name} imageURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${e.name}.png`}/>
      ))}
      {OtherBerryList.map((e) => (
        <ItemCard key={uuidv4()} ItemName={e.name} imageURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${e.name}.png`}/>
      ))}
      </div>

      <h1 className={styles.pokemonItens__Title}>Itens de Batalhas</h1>
      <div className={styles.pokemonItens_page}> 
      {BattleItemList.map((e) => (
        <ItemCard key={uuidv4()} ItemName={e.name} imageURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${e.name}.png`}/>
      ))}
      </div>

      </div>
      </>

  )
}