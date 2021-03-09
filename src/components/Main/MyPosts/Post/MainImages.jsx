import c from './MainImages.module.css'
const MainImages = (props) => {
    return (
        <div>
            <div className={c.background_img}>
                <img src="https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg?size=626&ext=jpg" alt="" />
            </div>
            <div className={c.main_logo}>
                <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="" />
            </div>
        </div>
    )
}


export default MainImages;
