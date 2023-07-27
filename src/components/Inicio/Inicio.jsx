import React from 'react'
import imgBanner from '../../assets/Banner3.jpg'
import ProfileImage from '../../assets/Perfil.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Inicio = () => {
    let Redes = [
        {name: "Instagram", link: "https://www.instagram.com/zushibld/", icon: faInstagram},
        {name: "Linkedin", link: "https://www.linkedin.com/in/jorge-tapia-abb34913b/", icon: faLinkedin},
        {name: "Twitter", link: "https://twitter.com/Zumoshii", icon: faTwitter},
    ];

    return (
        <>
            <div className='lg:w-[50%] p-5 mb-5 w-[100%] h-[100%] overflow-hidden'>
                <div className='flex justify-center w-[100%] h-[100%] mt-20'>
                    <div className='card'>
                        <div className='card-header py-1'>
                            <img class="lg:w-64 lg:h-64 w-56 h-56 rounded-full mx-auto" src={ProfileImage} alt="" />
                            <h1 className='font-bold text-xl mt-10 text-center hover:text-rose-500 transition duration-500 cursor-default'>✨ Hola soy ZushiDev ✨</h1>
                        </div>
                        <div className='card-body mt-5 lg:px-36 md:px-16 px-16 text-sm lg:text-md text-center font-extralight'>
                            <p>
                            Mi verdadero nombre es <span className='font-bold text-lime-400'>Jorge Tapia</span> y soy un apasionado estudiante de Ingeniería en Informática que está a punto de alcanzar 
                            una meta importante: ¡terminar mi último año de carrera!
                            </p>
                        </div>
                        <div className='card-footer mt-14 py-5 text-center'>
                            {Redes.map((redes) => (
                                <a href={redes.link} className='px-5 py-3.5 m-8 text-2xl rounded-full hover:bg-slate-800 bg-slate-900 transition duration-500'>
                                    <FontAwesomeIcon icon={redes.icon}></FontAwesomeIcon>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-[50%] lg:h-screen lg:block hidden overflow-hidden'>
                <img src={imgBanner} alt="" className='object-cover w-full h-full'/>
            </div>
        </>
    )
}

export default Inicio