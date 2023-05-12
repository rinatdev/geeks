import style from './Button.module.css'

const Button = (props) =>{
    return(
        <div className={style.button}>
            <button>
                {props.text}
            </button>
        </div>
    )
}

export default Button;