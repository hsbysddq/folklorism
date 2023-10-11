import styles from "./Category.module.css"
import { BsMenuButtonWideFill } from "react-icons/bs"
import React from "react"

const Category = () => {
  return (
    <div>
      <div className={styles.card}>
        <BsMenuButtonWideFill className={styles.menu} />
      </div>
    </div>
  )
}

export default Category
