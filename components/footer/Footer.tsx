import styles from "./footer.module.css";

const Footer = () => {
    return (
    <footer className={styles.container}>
        <div className={styles.logo}>Kaiowsz</div> 
        <div className={styles.text}>&reg; All rights reserved</div> 
    </footer>
    )
}

export default Footer