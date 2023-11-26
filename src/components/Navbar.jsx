import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-auto p-3 h-10 rounded-md bg-white items-center 
        justify-center flex font-bold shadow-md">
            <p className="red-gradient_text font-semibold ">ShelterGames</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to= "/about" className={({isActive}) => isActive? 
            'blue-gradient_text': 'text-black'}> 
                About
            </NavLink>
            <NavLink to= "/projects" className={({isActive}) => isActive? 
            'blue-gradient_text': 'text-black'}> 
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar