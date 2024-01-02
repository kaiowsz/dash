import Navbar from "@/components/navbar/Navbar"
import Sidebar from "@/components/sidebar/Sidebar"
import styles from "./dashboard.module.css"

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            <Sidebar />
        </div>
        <div className={styles.content}>
            <Navbar />
            {children}
        </div>
    </div>
  )
}

export default Layout