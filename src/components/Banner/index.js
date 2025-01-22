import styles from './Banner.module.css';

function Banner({ urlImagem ,tipoDeTech, descricao }) {
    return (
        <figure src={urlImagem} className={styles.section}>
            <div>
                <h1>{tipoDeTech}</h1>
                <p>{descricao}</p>
            </div>
            <div>
                Player
            </div>
        </figure>
    )
}

export default Banner;