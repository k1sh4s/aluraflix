import CampoTexto from 'components/CampoTexto';
import styles from './Formulario.module.css';

function Formulario() {
    return (
        <section className={styles.formulario}>
            <form className={styles.formularioContainer}>
                <h2>NOVO VÍDEO</h2>
                <CampoTexto label="Título" placeholder="Digite o título" />
                <CampoTexto label="Categoria" placeholder="Selecione uma categoria" />
                <CampoTexto label="Imagem" placeholder="Digite a url da imagem" />
                <CampoTexto label="Vídeo" placeholder="Digite o link do vídeo" />
                <CampoTexto label="Descrição" placeholder="Sobre o que é esse vídeo?" />
            </form>
        </section>
    )
}

export default Formulario;