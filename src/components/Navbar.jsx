import { NavLink } from "react-router";

export function Navbar() {
    const linkClassName = ({ isActive }) => `${style.navLink} ${isActive ? style.active : ''}`.trim()
    return (
        <nav>
            <div>
                <NavLink to="/about" className={linkClassName}>Om mig</NavLink>
                <NavLink to="/beskrivelse" className={linkClassName}>Beskrivelse af mit uddannelseforløb som webudviklerelev</NavLink>
                <NavLink to="/uddannelse" className={linkClassName}>Udannelse, erfaring og periode</NavLink>

               

            </div>
            </nav>
    )
}