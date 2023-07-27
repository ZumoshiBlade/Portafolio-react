import Header from './components/Header/Header.jsx'
import Inicio from './components/Inicio/Inicio.jsx'
import Bibliografia from './components/Bibliografia/Bibliografia.jsx'
import Habilidades from './components/Habilidades/Habilidades.jsx'
import Proyectos from './components/Proyectos/Proyectos.jsx'
import Contacto from './components/Contacto/Contacto.jsx'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState } from 'react'

const secciones = [
  <Inicio key={1}/>, 
  <Bibliografia key={2}/>, 
  <Habilidades key={3}/> , 
  <Proyectos key={4}/>, 
  <Contacto key={5}/>
]

function App() {
  const [window, setWindow] = useState(1);

  const handleWindow = (page) => {
    setWindow(page);
  }

  return (
    <div className='font-Roboto'>
      <header>
        <Header 
        handleWindow={handleWindow}/>
      </header>
      
      <section className='lg:flex flex-nowrap text-white seccion h-full w-full'>
        { window === 1 ?  secciones[0]: 
          window === 2 ?  secciones[1]:
          window === 3 ?  secciones[2]:
          window === 4 ?  secciones[3]:
          secciones[4]}
      </section>

      <footer className='text-center text-white mt-20 lg:my-3 text-sm bottom-0 w-full'>
        <p>ZumoshiBlade | Jorge Tapia © 2023, todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
