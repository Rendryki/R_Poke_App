import Head from 'next/head';
import ItensMenu from '@/components/itensMenu';
import PokeballIMG from '../../../public/pokeball-image-pokeitensPage.png';
import ItemIMG from '../../../public/sinnohstone-item-image.png';
import styles from '../../styles/css.modules/pokeItens.module.css';

export default function PokemonItens() {
  
    return (
      <div className={styles.pokeItens_page}>
      <Head>
            <title>Pokeitens</title>            
      </Head>
      <h1>Bem vindo a página de Itens!</h1>
      <h2>Aqui você poderá encontrar desde Pokebolas até pedras de evolução!</h2>
      <h2>Pesquise todos os itens desejados, provavelmente você irá encontra-los aqui! ;)</h2>
      <ItensMenu DestinationLink='/pokeItens/pokeballs/' ImgURL={PokeballIMG} ImgALT='Pokeball menu image' Text='Veja as principais pokebolas existentes em poucos cliques!'/>
      <ItensMenu DestinationLink='/pokeItens/pokemonItens/' ImgURL={ItemIMG}ImgALT='Unova stone item menu image' Text='Acesse alguns dos diversos itens do universo Pokémon!'/>
      </div>
  )
}