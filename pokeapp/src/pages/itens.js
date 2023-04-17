import Image from "next/image";
import Pokeball from '../../public/pokeball-image.png';
import Link from 'next/link'

export default function PokeItens() {

    return <><h1>Itens pokemon</h1>
        <Image
        src={Pokeball} // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="foto pokeball" />
        
          <ul>
            <li><Link href="/">home page</Link></li>
          </ul>
      
          
    </>
}