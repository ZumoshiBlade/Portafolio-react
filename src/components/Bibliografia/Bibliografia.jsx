import React from 'react'
import Tunic from '../../assets/Tunic.jpg'
import Videojuegos from '../../assets/Videojuegos.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faBriefcase, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import Documento from '../../assets/Curriculum.pdf'

const Bibliografia = () => {
  return (
    <>
      <div className='lg:w-[50%] lg:m-10 lg:block hidden'>
        <div className='grid grid-cols-2 gap-4 h-[100%] w-[100%] mx-5'>
          <div className='bg-rose-600 flex justify-center items-center text-3xl font-bold rounded-lg'>
            <h1>Sobre mi</h1>
          </div>
          <div className='bg-black overflow-hidden rounded-lg'>
            <img src={Tunic} alt="" className='h-[100%] w-[100%] object-cover hover:opacity-100 opacity-70 transition duration-500'/>
          </div>
          <div className='bg-black col-span-2 overflow-hidden rounded-lg'>
            <img src={Videojuegos} alt="" className='h-[100%] w-[100%] object-cover hover:opacity-100 opacity-70 transition duration-500'/>
          </div>
        </div>
      </div>
      <div className='lg:w-[50%] m-10 h-[100%]'>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-900 col-span-2 p-8 rounded-lg">
              <p className='text-justify text-xs lg:text-lg'>
              Soy Jorge Tapia, apasionado de la tecnología desde niño. 
              Mi interés por la programación y los videojuegos me llevó a descubrir mi talento para crear cosas nuevas. 
              Disfruto el proceso creativo de desarrollar aplicaciones y sitios web, además de encontrar inspiración en los videojuegos. 
              Aspiro a seguir creciendo en estas áreas y construir mi carrera profesional en proyectos emocionantes que me permitan seguir creando y aportando al mundo digital. 
              El futuro me emociona y estoy listo para las oportunidades que se presenten en este apasionante viaje.
              </p>
          </div>
          <div className="bg-slate-900 p-4 rounded-lg">
            <div className='text-center'>
              <FontAwesomeIcon icon={faSchool} className='text-2xl'/>
              <h1 className='my-2 text-rose-500'>Formación académica</h1>
            </div>
            <ul className='text-[12px] text-center'>
              <li>2022 - 2023 Ing. informática.</li>
              <li>2020 - 2021 Analista programador.</li>
              <li>2018 - 2019 Técnico en electricidad.</li>
              <li>2016 - 2017 Enseñanza media.</li>
              <li>2015 - 2008 Enseñanza básica.</li>
            </ul>
          </div>
          <div className="bg-slate-900 p-4 rounded-lg">
            <div className='text-center'>
              <FontAwesomeIcon icon={faBriefcase} className='text-2xl'/>
              <h1 className='my-2 text-lime-400'>Experiencia laboral</h1>
            </div>
            <ul className='text-[12px] text-center'>
              <li>Viña Concha y Toro Operador de máquina</li>
              <li>23KY Soporte técnico.</li>
            </ul>
          </div>
          <div className="bg-slate-900 col-span-2 p-8 rounded-lg flex justify-center">
            <a href={Documento} className='bg-purple-800 hover:bg-purple-500 p-5 rounded-lg transition duration-500'>
              <FontAwesomeIcon icon={faFilePdf} className='mx-2 text-2xl'/>
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bibliografia