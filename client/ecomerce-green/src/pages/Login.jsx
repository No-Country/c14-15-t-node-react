
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import MainLayout from "../components/MainLayout"
import "../pages/Login/login.css"
import { useState } from "react"

export const Login = () => {
  const [ icoPassword, setsicoPassword ] = useState(false)
  return (
   
    <MainLayout>
    <main className='container flex justify-center '>
    
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
      <form className="  space-y-6" action="#" method="POST">
        <div className='form-container'>
           <label htmlFor="email" className="lbl-nombre absolute w-full   text-sm font-medium leading-6">
            {/* <spam className="text-nomb">Email</spam> */}
          </label>
          <div className="w-full ">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="form   w-full    border-0 pt-2 pb-0  sm:text-sm sm:leading-6"
              placeholder="Email"
            />
          </div>
        </div>

        <div className='form-container'>
          <div className="flex items-center justify-between">
             <label htmlFor="password" className="lbl-nombre absolute text-sm  leading-6 ">
            {/* <spam className='text-nomb'>Contraseña</spam>  */}
            </label> 
            
          </div>
          <div className= " w-full flex flex-row-reverse items-center">
            <div className="icono flex cursor-pointer w-50%  flex-row-reverse  relative " onClick={() => setsicoPassword (!icoPassword)}>

              { icoPassword  ? <AiOutlineEye  size={20}/>  : <AiOutlineEyeInvisible  size={20}/> }
             </div>
            <input
              id="password"
              name="password"
              type={ icoPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              className="form block  w-full  border-0   shadow-sm  sm:text-sm sm:leading-6  "
             placeholder="Contraseña"
            />
           
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
            className="flex w-[160px] h-[40px] justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
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
