import style from './Footer.module.css'

const Footer = ({ list }) =>{
    return(
        <div className={style.footer}>
            {list.map((el, id) => 
            <div key={id}>
                <div>{el}</div>
            </div>
            )}
            
        </div>
    )
}

export default Footer;