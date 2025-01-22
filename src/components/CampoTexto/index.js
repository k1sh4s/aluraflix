import styles from './CampoTexto.module.css';

function CampoTexto(props) {
    return(
        <div className={styles.campoTexto}>
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto;