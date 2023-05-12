import style from './Header.module.css'

const Header = ({ list }) => {
    return(
        <div className={style.header}>
            {list.map((el, id) => 
            <div key={id}>
                <div>{el}</div>
            </div>
            )}
        </div>
    )
}

export default Header;