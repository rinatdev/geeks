import {useState} from "react";


const Input = ({name, placeholder, onChange}) => {


    return (
        <input type="text" placeholder={placeholder} onChange={onChange} name={name}/>
    )
}


export default Input;