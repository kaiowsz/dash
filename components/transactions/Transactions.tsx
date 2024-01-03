import Image from "next/image"
import styles from "./transactions.module.css"

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td> 
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="Avatar" width={40} height={40} className={styles.userImage} /> Kaioba do Grau 
              </div>
            </td>

            <td> 
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            
            <td>10.01.2024</td>

            <td>$3.200</td>
          </tr>

          <tr>
            <td> 
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="Avatar" width={40} height={40} className={styles.userImage} /> Kaioba do Grau 
              </div>
            </td>

            <td> 
              <span className={`${styles.status} ${styles.pending}`}>Pending</span> 
            </td>
            
            <td>10.01.2024</td>

            <td>$3.200</td>
          </tr>

          <tr>
            <td> 
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="Avatar" width={40} height={40} className={styles.userImage} /> Kaioba do Grau 
              </div>
            </td>

            <td> 
              <span className={`${styles.status} ${styles.canceled}`}>Canceled</span> 
            </td>
            
            <td>10.01.2024</td>

            <td>$3.200</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default Transactions