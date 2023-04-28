import PaginaAnteriorBtn from "@/components/paginaAnteriorBtn";
import Image from "next/image";
import styles from '../../../styles/css.modules/[pokeballs].module.css';
import Head from "next/head";
import { v4 as uuidv4 } from 'uuid';

export const getStaticPaths = async() => {
    const resSpecial = await fetch(`https://pokeapi.co/api/v2/item-category/33/`);
    const resStandard = await fetch(`https://pokeapi.co/api/v2/item-category/34/`);
    const resApricorn = await fetch(`https://pokeapi.co/api/v2/item-category/39/`);
    const dataSpecial = await resSpecial.json();
    const dataStandard = await resStandard.json();
    const dataApricorn = await resApricorn.json();

    const pathsSpecial = dataSpecial.items.map((e) => {
        return {
            params: {pokeballs: e.name}
        }
    });
    const pathsStandard = dataStandard.items.map((e) => {
        return {
            params: {pokeballs: e.name}
        }
    });
    const pathsApricorn = dataApricorn.items.map((e) => {
        return {
            params: {pokeballs: e.name}
        }
    });

    const paths = [...pathsSpecial, ...pathsStandard, ...pathsApricorn];

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const pokeballId = context.params.pokeballs;

    const res = await fetch(`https://pokeapi.co/api/v2/item/${pokeballId}`);
    const data = await res.json();

    return {
        props: {pokeball: data},
    } 
}

export default function Pokeballs({pokeball}){

    return(
        <div className={styles.pokeball_page}>
        <Head>
            <title>Pokeball_{pokeball.name}</title>
         
        </Head>
        <PaginaAnteriorBtn PaginaAnteriorPath='/pokeItens/pokeballs' Text='Página anterior'/>
        <div className={styles.pokeball_card_infos}>
            
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${pokeball.name}.png`} width={200} height={200} alt={`${pokeball.name} image`}/>
            <h1 className={styles.pokeball_name}>{pokeball.name}</h1> 
            <h2 className={styles.pokeball_category}>{pokeball.category.name}</h2>
            {pokeball.effect_entries.map((e) => (
                <h2 key={uuidv4()}> {e.short_effect} </h2>
            ))}

        </div>
        </div>
    )
}