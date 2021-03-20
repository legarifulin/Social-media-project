import c from './MainImages.module.css'
import logo from '/React/01-first-project/my-app/src/gallery/cvimg.jpg'

const MainImages = (props) => {
    return (
        <div>
            <div className={c.main_logo}>
                <img src={logo} alt="" />
            </div>
        </div>
    )
}


export default MainImages;
