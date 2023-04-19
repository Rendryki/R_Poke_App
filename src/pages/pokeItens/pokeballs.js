import Link from 'next/link';
import Head from 'next/head';

export async function getStaticProps() {
  const res = await fetch(`https://pokeapi.co/api/v2/item-category/33/`);
  const data = await res.json();
  const itemList = data.items;

  return { props: { itemList } }
}
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/<<item name>>.png get the images of each iten
export default function Pokeballs({ itemList }) {
  console.log(itemList)
  
    return (
      <>
      <Head>
            <title>Pokeitens</title>            
      </Head>
      {
        itemList.map((e) => ( 
          <p>{e.name}</p>
        ))
      }
      {
        itemList.forEach((e) => {
          <p>{e.name}</p>
      })
      }
      </>

  )
}