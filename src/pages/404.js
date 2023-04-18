import Link from 'next/link'
import styles from '../styles/css.modules/404.module.css'

export default function ErrorPage(){
    return(
        <div className={styles.erro}>
            <h2>Erro 404</h2>
            <h1>Ops... Alguma coisa deu errado!</h1>
            <Link className={styles.erro_link} href='/'>VOLTAR PARA A PÁGINA INICIAL</Link>
        </div>
    )
}