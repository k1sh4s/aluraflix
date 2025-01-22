import styles from './Rodape.module.css';


function Rodape() {
    return (
        <footer className={styles.footer}>
            <img src='/assets/logo.png' alt='Logo da AluraFlix' className={styles.logo}/>
        </footer>
    )
}

export default Rodape;