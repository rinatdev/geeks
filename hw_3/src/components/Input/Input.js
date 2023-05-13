import {useState} from "react";
import style from './Input.module.css'


const Input = ({name, value, placeholder, onChange}) => {


    return (
        <input className={style.input} type="text" placeholder={placeholder} onChange={onChange} name={name} value={value}/>
    )
}


export default Input;