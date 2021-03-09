import c from './MainInformation.module.css'
const MainInformation = () => {
    return (
        <div className={c.main_information}>
            <h2 className="name">Trafikas</h2>
            <ul>
                <li>Date of Birth: 15 march</li>
                <li>City: Vilnius</li>
            </ul>
        </div>
    )
}
export default MainInformation