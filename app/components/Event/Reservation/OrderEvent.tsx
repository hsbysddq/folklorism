import Image from "next/image"
import React from "react"
import DetailEvent from "./DetailEvent"
import styles from "./OrderEvent.module.css"
import Nav from "../../Nav"

const OrderEvent = () => {
  return (
    <div className="bg-[#F4DFBA] h-screen">
      <Nav />
      <div className="py-11">
        <div className="w-full h-full flex justify-center">
          <form className={styles.chooser}>
            <div className={styles.header}>
              <span className={styles.title}>Choose your ticket</span>
              <p className={styles.desc}>
                select the ticket according to the category you want.
              </p>
            </div>
            <div className={styles.option}>
              <input value="free" id="free" name="plan" type="radio" />
              <label className={styles.labil}>
                <div className={styles.info}>
                  <span className={styles.cost}>Rp 75.000</span>
                  <span className={styles.name}>Reguler</span>
                </div>
              </label>
            </div>

            <div className={styles.option}>
              <input value="free" id="free" name="plan" type="radio" />
              <label className={styles.labil}>
                <div className={styles.info}>
                  <span className={styles.cost}>Rp 150.000</span>
                  <span className={styles.name}>VIP</span>
                </div>
              </label>
            </div>

            <div className={styles.option}>
              <input value="free" id="free" name="plan" type="radio" />
              <label className={styles.labil}>
                <div className={styles.info}>
                  <span className={styles.cost}>Rp 250.000</span>
                  <span className={styles.name}>VVIP</span>
                </div>
              </label>
            </div>

            <a href="#" title="" className={styles.btn}>
              Order
            </a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default OrderEvent
