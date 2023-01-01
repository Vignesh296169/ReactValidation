import styles from "./Card.module.css"


import React from 'react'

function Card(props) {
  return (
    <div className={`${styles.Card} ${props.className}`}>

     {props.children}

    </div>
  )
}

export default Card