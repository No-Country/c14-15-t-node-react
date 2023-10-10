
import { BsFacebook, BsTelephoneFill, } from 'react-icons/bs';
import { AiFillInstagram, AiOutlineMail, AiFillLinkedin}  from "react-icons/ai"


const Footer = () => {
    return (
        <footer className=" py-12">
            <div className="flex relative bottom-4 left-8 w-[50%] gap-5 lg:gap-7 gap-3 " >
                <img className='w-[24px] h-[29px] relative left-3' src="../logo.png" alt="logo de la página" />
                <h1 className="title-footer">GreenIX</h1>
            </div>
        <div className="footer-container flex lg:flex-row  justify-around items-center py-5 px-5 gap-3 flex-col sm:flex-col log:gap-5 sm:gap-3 md:flex-row">
                <ul className='footer-icons flex gap-3'>
                <li><a href="#"> <BsFacebook size={18}/></a></li>
                <li><a href="#"> <AiFillInstagram size={20}/></a></li>
                <li className=''><a href="#"> <AiFillLinkedin size={20}/></a></li>
                </ul>
            
            <div className='flex '>
                <p className='flex gap-2 items-center'> <BsTelephoneFill color='#976336'/> 020 845 6565 </p>
            </div>
             <div>
                <p className='flex gap-3 items-center'> <AiOutlineMail color='#976336' size={20} /> contacto@nombre.net</p>
            </div>
            <div className='btn-footer flex justify-center w-[160px] h-[40px]'>
                <button>Contacto</button>
            </div> 
         </div>
        </footer>
    );
};


export default Footer

