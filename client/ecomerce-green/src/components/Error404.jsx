import "./../styles/Error404.css";
import { useNavigate } from 'react-router-dom';
const Error404 = () => {
    const history= useNavigate();
    const goToHome=()=>{
        history('/');
    }
    const goToPreview=()=>{
        history(-1);
    }
  return (
    <>
      <div className="error-gradient"></div>
      <section className=" error-container h-[650px]
       flex flex-col gap-10 py-10 justify-center items-center lg:h-[800px]">
        <div className="flex flex-col gap-10 justify-center items-center">
          <h2 className="text-[white] text-center text-[2rem] font-semibold w-[250px]
          md:w-[316px] md:text-[40px] lg:text-[48px] lg:w-[380px]">
            ¡Ocurrió un error! Vuelve a la home o la pagina previa
          </h2>
          <img className="w-[253px] h-[210px] md:w-[320px] md:h-[240px]
          lg:w-[380px] lg:h-[315px]" src="/img/page-not-found.png" alt="" />
        </div>

        <div className="text-[1rem] text-[white]
        flex flex-col gap-4 justify-center items-center  md:text-[20px]
        md:w-[400] md:flex-row md:justify-center md:items-center lg:text-[22px]">
            <button className="error__button error__button-home 
            w-[178px] h-[40px] md:w-[190px] " onClick={goToHome}>
            Home
            </button>
            <button className="error__button error__button-preview 
            w-[178px] h-[40px] md:w-[190px]" onClick={goToPreview}>
            Página Previa
            </button>
        </div>
      </section>
    </>
  );
};
export default Error404;
