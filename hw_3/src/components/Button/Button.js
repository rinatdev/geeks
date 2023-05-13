import React from 'react'
import style from './Button.module.css'

const Button = ({ children, handleClick}) => {
  return (
    <button className={style.button} onClick={handleClick}>{children}</button>
  )
}

export default Button