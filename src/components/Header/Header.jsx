import c from './Header.module.css'

const Header = () => {
    return (
        <header className={c.header}>
            <div className={c.logo}>
                <img src="https://pngimg.com/uploads/dodge/dodge_PNG2.png" alt="" />
            </div>
        </header>
    )
}

export default Header