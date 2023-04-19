import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import PokeballIMG from '../../public/pokeball-image-pokeitensPage.png'
import ItemIMG from '../../public/unovastone-item-image.png'

export default function PokemonItens({ itemList }) {
  console.log(itemList)
  
    return (
      <>
      <Head>
            <title>Pokeitens</title>            
      </Head>
      <Image src={PokeballIMG} width={300} height={300} alt='Pokeball menu image'/>
      <Image src={ItemIMG} width={250} height={300} alt='Unova stone item menu image'/>
      </>

  )
}