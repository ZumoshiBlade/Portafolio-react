import React from 'react'

const Habilidades = () => {
  return (
    <div className='h-[100%] w-[100%] flex justify-center items-center'>
      <div className="grid grid-cols-3 gap-6">
        <div className='bg-slate-800 m-10 rounded-md'>
          <header className='p-10'>
            <h1 className='text-center'>Lenguajes y Frameworks</h1>
          </header>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quis quasi cupiditate consequatur facere error suscipit qui asperiores nobis, voluptatem enim nostrum. Molestias repudiandae obcaecati nihil ut debitis aliquam perspiciatis.</p>
          </div>
        </div>
        <div className='bg-slate-800 m-10 rounded-md'>
          <header className='p-10'>
            <h1 className='text-center'>Gestión y Documentación</h1>
          </header>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quis quasi cupiditate consequatur facere error suscipit qui asperiores nobis, voluptatem enim nostrum. Molestias repudiandae obcaecati nihil ut debitis aliquam perspiciatis.</p>
          </div>
        </div>
        <div className='bg-slate-800 m-10 rounded-md'>
          <header className='p-10'>
            <h1 className='text-center'>Habilidades Blandas</h1>
          </header>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quis quasi cupiditate consequatur facere error suscipit qui asperiores nobis, voluptatem enim nostrum. Molestias repudiandae obcaecati nihil ut debitis aliquam perspiciatis.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Habilidades