import PaginaAnteriorBtn from "@/components/paginaAnteriorBtn";
import Image from "next/image";
import styles from '../../../styles/css.modules/[pokemonItens].module.css';
import Head from "next/head";
import { v4 as uuidv4 } from 'uuid';

export const getStaticPaths = async() => {
    const resHealings = await fetch(`https://pokeapi.co/api/v2/item-category/27`);
    const dataHealings = await resHealings.json();

    const resRecovery = await fetch(`https://pokeapi.co/api/v2/item-category/28`);
    const dataRecovery = await resRecovery.json();

    const resEffortBerry = await fetch(`https://pokeapi.co/api/v2/item-category/2`);
    const dataEffortBerry = await resEffortBerry.json();

    const resMedicineBerry = await fetch(`https://pokeapi.co/api/v2/item-category/3`);
    const dataMedicineBerry = await resMedicineBerry.json();

    const resOtherBerry = await fetch(`https://pokeapi.co/api/v2/item-category/4`);
    const dataOtherBerry = await resOtherBerry.json();

    const resBattleItem = await fetch(`https://pokeapi.co/api/v2/item-category/43`);
    const dataBattleItem = await resBattleItem.json();

    const pathsHealing = dataHealings.items.map((e) => {
        return {
            params: {pokemonItens: e.name}
        }
    });
    const pathsRecovery = dataRecovery.items.map((e) => {
        return {
            params: {pokemonItens: e.name}
        }
    });
    const pathsEffortBerry = dataEffortBerry.items.map((e) => {
        return {
            params: {pokemonItens: e.name}
        }
    });
    const pathsMedicineBerry = dataMedicineBerry.items.map((e) => {
        return {
            params: {pokemonItens: e.name}
        }
    });
    const pathsOtherBerry = dataOtherBerry.items.map((e) => {
        return {
            params: {pokemonItens: e.name}
        }
    });
    const pathsBattleItem = dataBattleItem.items.map((e) => {
        return {
            params: {pokemonItens: e.name}
        }
    });

    const paths = [...pathsHealing, ...pathsRecovery, ...pathsEffortBerry, ...pathsMedicineBerry, ...pathsOtherBerry, ...pathsBattleItem];

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const itemId = context.params.pokemonItens;

    const res = await fetch(`https://pokeapi.co/api/v2/item/${itemId}`);
    const data = await res.json();

    return {
        props: {item: data},
    } 
}

export default function PokemonItem({item}){

    return(
        <div className={styles.pokemonItem_page}>
        <Head>
            <title>Pokeitem_{item.name}</title>
        </Head>
        <PaginaAnteriorBtn PaginaAnteriorPath='/pokeItens/pokemonItens' Text='Página anterior'/>
        <div className={styles.pokemonItem_card_infos}>
            
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name}.png`} width={200} height={200} alt={`${item.name} image`}/>
            <h1 className={styles.pokemonItem_name}>{item.name}</h1> 
            <h2 className={styles.pokemonItemcategory}>{item.category.name}</h2>
            {item.effect_entries.map((e) => (
                <h2 key={uuidv4()}> {e.short_effect} </h2>
            ))}

        </div>
        </div>
    )
}