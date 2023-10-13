import React from 'react'
import MainLayout from "../components/MainLayout"




export const Login = () => {
  return (

    <MainLayout>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src="./logo.png"
        alt="Your Company"
      />
      <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
       GreenIX
      </h2>
      <p className='text-center mt-5 text-2x3'>Ingresa tus datos</p>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div>
          {/* <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email
          </label> */}
          <div className="">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full  border-0 py-1.5 text-gray-900 shadow-sm  ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder='Email'
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
             <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
             
            </label> 
            
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full  border-0 py-1.5 text-gray-900 shadow-sm  ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             placeholder='Contraseña' 
            />
          </div>
        </div>
        <div className="text-sm flex justify-center">
              <a href="#" className="font-semibold text-white-600 hover:text-indigo-500">
                ¿Has olvidado tu contraseña?
              </a>
            </div> 

        <div className='flex justify-center '>
          <button
            type="submit"
            className="flex w-[160px] h-[40px] justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
          <p className='text-2x5'>Ingresar</p>  
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        ¿No estas registrado?{' '}
        <a href="#" className="font-semibold leading-6 text-orange-600 hover:text-orange-500">
        Crear cuenta
        </a>
      </p>
    
    </div>
  </div>
  </MainLayout>


  )
}
