import styles from "./header.module.css";
export default function Header({name, imageDataURL}) {

    return <header className={styles.header}>
        <img className={styles.image} src={imageDataURL}/><h1>{name}</h1>
    </header>
}