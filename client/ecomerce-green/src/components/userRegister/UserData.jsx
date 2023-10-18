import './../../styles/UserData.css';
import isoTipo from '/logo.svg'
import TextField from './TextField';
import { useState } from 'react';
import ButtonForm from './ButtonForm';
const UserData =()=>{
    const [name, setName] = useState("");
    const [lasName, setLastName] = useState("");
    const [email, setEmail]= useState("");
    const [password_1, setPassword_1] = useState("");
    const [password_2, setPassword_2]= useState("");
    const [errors, setErrors] =useState ({
        name:{
            error: false,
            message: "",
        }
    });
    return <section className="userData w-full flex justify-center items-center">
        <div className='pt-[104px] pb-[60px] 
        md:pt-[129px] md:pb-[64px] lg:pt-[144px] lg:pb-[74px]'>
            <div 
            className='userData__form-content py-8 px-6 flex flex-col 
            gap-5 justify-center items-center 
            md:w-[336px]'>
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-8 h-10' src={isoTipo} />
                    <p className='text-white text-[20px] font-extrabold'>GreenIX</p>
                </div>
                <p className='text-white font-normal text-[1rem]'>Registra tus datos</p>

                <form className='w-[240px] flex flex-col justify-center items-center' method='POST'>
                    <TextField 
                    type={'text'} 
                    placeholder={'Nombre'} 
                    name={'name'}
                    id={'name'}
                    ariaLabel={'nombre completo'}
                    value={name}
                    label={'Nombre'}
                    onChange={(e)=>{ setName(e.target.value)}}
                    error={false}
                    bgColor={'transparent'}
                    colorText={'white'}
                    helperText={'Ingrese su nombre completo'}
                    errorMessage={''}
                    />
                    <TextField 
                    type={'text'} 
                    placeholder={'Apellidos'} 
                    name={'lastName'}
                    id={'lastName'}
                    ariaLabel={'Apellidos completos'}
                    value={lasName}
                    label={'Apellidos'}
                    onChange={(e)=>{ setLastName(e.target.value)}}
                    error={false}
                    bgColor={'transparent'}
                    colorText={'white'}
                    helperText={'Ingrese sus apellidos completos'}
                    errorMessage={''}
                    />
                    <TextField 
                    type={'email'} 
                    placeholder={'Email'} 
                    name={'email'}
                    id={'email'}
                    ariaLabel={'Correo electronico'}
                    value={email}
                    label={'Email'}
                    onChange={(e)=>{ setEmail(e.target.value)}}
                    error={false}
                    bgColor={'transparent'}
                    colorText={'white'}
                    helperText={'Ingrese un email válido'}
                    errorMessage={''}
                    />
                    <TextField 
                    type={'password'} 
                    placeholder={'Ingresar contraseña'} 
                    name={'password'}
                    id={'password'}
                    ariaLabel={'password'}
                    value={password_1}
                    label={'Ingresar contraseña'}
                    bgColor={'transparent'}
                    colorText={'white'}
                    onChange={(e)=>{ setPassword_1(e.target.value)}}
                    error={false}
                    helperText={'Ingrese su contraseña, más de 6 digitos'}
                    errorMessage={''}
                    />
                    <TextField 
                    type={'password'} 
                    placeholder={'Repetir contraseña'} 
                    name={'password_2'}
                    id={'password_2'}
                    ariaLabel={'password_repetida'}
                    value={password_2}
                    label={'Repetir contraseña'}
                    bgColor={'transparent'}
                    colorText={'white'}
                    onChange={(e)=>{ setPassword_2(e.target.value)}}
                    error={false}
                    helperText={'Repita la misma contraseña'}
                    errorMessage={''}
                    />
                    <ButtonForm  text={'Registrarse'} type={'submit'} />
                </form>
                <div className='text-[12px] '>
                    <span className='text-[white] font-normal'>¿Ya estás registrado?  </span>
                    <a className=' font-semibold text-[#F8924F]' href='/login'>Ingresar a cuenta</a>
                </div>
            </div>
        </div>
    </section>
}
export default UserData;