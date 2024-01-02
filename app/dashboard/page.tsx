import styles from "./dashboard.module.css"


import Card from "@/components/card/Card"
import Chart from "@/components/chart/Chart"
import RightBar from "@/components/rightbar/RightBar"
import Transactions from "@/components/transactions/Transactions"
import React from "react"

const Dashboard = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <aside className={styles.side}>
        <RightBar />
      </aside>
    </section>
  )
}

export default Dashboard