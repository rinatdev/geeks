import React from 'react'
import style from './Container.modules.css'

const Container = ({ children }) => {
  return (
    <div className={style.container}>
        {children}
    </div>
  )
}

export default Container