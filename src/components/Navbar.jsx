import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {

const [NavbarOpen, setNavbarOpen] = useState(false);
    const linkClassName = ({ isActive}) =>
    [
         "relative block rounded-lg px-2 py-2 text-sm font-medium transition-colors duration-200",
        "text-[#202020] hover:text-[#C52525]",
        isActive ? "text-[#C52525] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-[#C52525]":"", 
    ]. join(" ");
    return (
        <header className="sticky  top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur" >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <h1 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">Mit portfolio som webudvikler</h1>
                <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 md:hidden"
                onClick={() => setNavbarOpen(!NavbarOpen)}
                >
                    Menu

                </button>
             <nav className="hidden gap-2 md:flex">
            
                <NavLink to="/about" className={linkClassName}>Om mig</NavLink>
                <NavLink to="/beskrivelse" className={linkClassName}>Beskrivelse af mit uddannelseforløb</NavLink>
                <NavLink to="/uddannelse" className={linkClassName}>Udannelse, erfaring og periode</NavLink>
                <NavLink to="/praktik" className={linkClassName}>Praktik</NavLink>
            </nav>
            </div>
            {NavbarOpen && (
                <nav className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
                <div className="flex flex-col gap-2">
                <NavLink to="/about" className={linkClassName} onClick={() => setNavbarOpen(false)}>Om mig</NavLink>
                <NavLink to="/beskrivelse" className={linkClassName} onClick={() => setNavbarOpen(false)}>Beskrivelse af mit uddannelseforløb</NavLink>
                <NavLink to="/uddannelse" className={linkClassName} onClick={() => setNavbarOpen(false)}>Udannelse, erfaring og periode</NavLink>
                <NavLink to="/praktik" className={linkClassName} onClick={() => setNavbarOpen(false)}>Praktik</NavLink>

                </div>


                </nav>
            )}
        </header>
       
    )
}
