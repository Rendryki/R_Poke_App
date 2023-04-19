import Link from 'next/link';
import styles from '../styles/css.modules/404.module.css';
import ErrorIMG from '../../public/pikachu-sad-error-image.png';
import Image from 'next/image';

export default function ErrorPage(){
    return(
        <div className={styles.erro}>
            <h2>Erro 404</h2>
            <h1>Ops... Alguma coisa deu errado!</h1>
            <Image src={ErrorIMG} width={300} height={200} alt='Sad pikachu error image'/>
            <Link className={styles.erro_link} href='/'>VOLTAR PARA A PÁGINA INICIAL</Link>
        </div>
    )
}