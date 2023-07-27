import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = ({handleWindow}) => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    let logoName = "ZushiDev."

    let Links = [
        {name: "Inicio", page: 1},
        {name: "Biografía", page: 2},
        {name: "Habilidades", page: 3},
        {name: "Proyectos", page: 4},
        {name: "Contacto", page: 5},
    ];



return (
    <nav className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full ml-5 text-3xl font-extrabold cursor-default'>{logoName}</h1>
        <ul className='hidden lg:flex'>
            {Links.map((link) => (
                <li onClick={() => handleWindow(link.page)} className='p-5 hover:bg-slate-900 hover:border-b-2 border-solid border-b-lime-500 transition duration-500 cursor-pointer'>
                        {link.name}
                </li>
            ))}
        </ul>
        <div onClick={handleNav} className='block lg:hidden'>
            {nav ? <FontAwesomeIcon icon={faXmark} className='text-xl mx-5'/> : <FontAwesomeIcon icon={faBars} className='text-xl mx-5'/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-slate-950 bg-slate-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl m-4 font-extrabold cursor-default'>{logoName}</h1>
            <ul className='uppercase p-4'>
                {Links.map((link) => (
                    <li onClick={() => handleWindow(link.page)} className='p-5 border-b border-gray-600 cursor-pointer'>
                        <a>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
    );
};

export default Header;
