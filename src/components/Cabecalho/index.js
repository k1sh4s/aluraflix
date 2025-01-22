import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.css";
import CabecalhoLink from "components/CabecalhoLink";

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src='/assets/logo.png' alt="Logo da AluraFlix" className={styles.logo}/>
            </Link>
            <nav className={styles.nav}>
                <CabecalhoLink url='./'>
                    HOME
                </CabecalhoLink>
                <CabecalhoLink url='./NovoVideo'>
                    NOVO VIDEO
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;