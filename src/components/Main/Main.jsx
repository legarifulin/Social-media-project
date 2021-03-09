import c from './Main.module.css'
import MainInformation from './MainInformation/MainInformation'
import MyPosts from './MyPosts/Post/MyPosts'
import MainImages from './MyPosts/Post/MainImages'

const Main = () => {
    return (
        <div className={c.main}>
            <MainImages />
            <MainInformation />
            <MyPosts />
        </div>

    )
}

export default Main