import style from './MainPage.module.css'

const MainPage = (props) =>{
    return(
        <div className={style.main}>
            {props.text}
        </div>
    )
}

export default MainPage;