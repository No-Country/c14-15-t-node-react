
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import MainLayout from "../components/MainLayout"
import "../styles/login.css"
import { useState } from "react"

export const Login = () => {
  const [ icoPassword, setsicoPassword ] = useState(false)
  return (
   
    <MainLayout>
    <main className='container-login flex justify-center '>
    
    <div className="flex  min-h-full  flex-col justify-center px-6 py-12 lg:px-8">
    <div className=' input-container w-[336px] h-[400px] justify-center '>
    <div className=" logo sm:mx-auto sm:w-full sm:max-w-sm ">
     
      <img
        className="mx-auto h-[40px] w-[33px]"
        src="/src/assets/logo.svg" 
        alt="Your Company"
      />
     
      <h2 className="mt-1 text-center text-1xl  leading-9 tracking-tight text-white-200">
       GreenIX
      </h2>
      <p className='text-center mt-1 title'>Ingresa tus datos</p>
    </div>

    <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
      <div className="p-2">
      <div className="w-56 left-8 relative group">
    
      <input 
      id="email"
      name="email"
      type="email"
      autoComplete="email"
      required 
      className="form w-full text-white px-4 text-sm peer  outline-none"/>
      
      <label 
      htmlFor="email"
     className=" title transform transition-all text-white absolute pb-2 size-14px  top-0 left-0 h-full flex items-center  text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 shadow-sm  sm:text-sm sm:leading-6">
      Email</label>
      </div>
      </div> 

  <div className="p-2">
  <div className="w-56 left-8 relative group flex flex-row-reverse">
    <div className="icono flex cursor-pointer w-50%  flex-row-reverse absolute text-white  " onClick={() => setsicoPassword (!icoPassword)}>

    { icoPassword  ? <AiOutlineEye  size={20}/>  : <AiOutlineEyeInvisible  size={20}/> }
    </div>
      <input 
      name="password"
      type={ icoPassword ? "text" : "password"} 
      id="password" 
      autoComplete="current-password"
      required 
      className="form w-full text-white  px-4 text-sm peer outline-none"/>
      
      <label 
      htmlFor="password"
     className=" title transform transition-all text-white  absolute pb-2 top-0 left-0 h-full flex items-center  text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 shadow-sm  sm:text-sm sm:leading-6">
      Contraseña
      </label>
  </div>
  </div>    
        <div className="text-sm flex justify-center">
              <a href="#" className="title">
                ¿Has olvidado tu contraseña?
              </a>
            </div> 

        <div className='flex justify-center '>
          <button
            type="submit"
            className="flex w-[160px] h-[40px] justify-center rounded-md bg-[#F8924F99] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#F8924F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
          <p className=''>Ingresar</p>  
          </button>
        </div>
      </form>

      <p className="mt-5 mb-2 text-center text-sm title">
        ¿No estas registrado?{' '}
        <a href="#" className="font-semibold leading-6 text-orange-600 hover:text-orange-500">
        Crear cuenta
        </a>
      </p>
    </div>
  </div>
  </div>
  </main>
  

  </MainLayout>
  

  )

}
