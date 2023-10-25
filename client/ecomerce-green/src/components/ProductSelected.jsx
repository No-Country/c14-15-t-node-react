import useFetch from "../redux/service/useFetch";
import arrowRight from "./../assets/arrow-right.svg";
import arrowDown from "./../assets/arrow-down.svg";
import { useState } from "react";
import "./../styles/ProductSelected.css";
import TagEfficiency from "./TagEficciency";
const ProductSelected = ({ id }) => {
  const { data } = useFetch(`/${id}`);

  console.log("objeto:", data);
  const [selected, setSelected] = useState(false);
  const toggle = (id) => {
    if (selected == id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };
  
  return (
    <section
      className="w-full px-3 flex flex-col justify-center items-center
    md:flex-col md:px-16 md:py-6"
    >
      <div
        className="flex flex-col justify-center items-center 
      md:flex md:flex-row-reverse md:justify-center 
      md:gap-5"
      >
        <div
          className=" text-[#051C12] flex flex-col gap-[12px]
            w-[280px] md:w-[200px] lg:w-[302px]"
        >
          <p
            className="text-[1rem] text-[#346758] font-normal underline
            md:text-[20px]"
          >
            {data?.category?.name}
          </p>
          <h2 className=" font-semibold text-[32px]">
            {data?.category?.brand_name}
          </h2>
          <span className=" font-light text-[20px]">{data?.name}</span>
          <div className="border-t-2 border-[#252B2F]"></div>
          <span className=" font-extrabold text-[36px]">{data?.price}</span>
          <div className="flex flex-col gap-3">
            <button
              className="text-[20px] text-[white] bg-[#F8924FF2] hover:bg-[#ea8847] w-full h-[40px]
              flex justify-center items-center rounded-lg font-medium"
              type="submit"
            >
              Agregar al carrito
            </button>
            <button
              className="text-[20px] text-[white] bg-[#34946A] hover:bg-[#258059] w-full h-[40px]
              flex justify-center items-center rounded-lg font-medium"
            >
              Comprar
            </button>
          </div>
        </div>

        <div
          className="flex flex-col justify-center gap-5 mt-5
          w-[280px] md:w-[420px] md:flex-row md:gap-5 
          lg:w-[620px] "
        >
          <img
            className="rounded-lg h-[300px] w-[280px] md:w-[200px] 
            lg:w-[300px] lg:h-[400px]"
            src={data?.images.cover}
            alt="imagen_1 del producto"
          />
          <img
            className="rounded-lg h-[300px] w-[280px] md:w-[200px] 
            lg:w-[300px] lg:h-[400px]"
            src={data?.images.picture_1}
            alt="imagen_2 del producto"
          />
        </div>
      </div>
      <div
        className="w-[280px]  text-[16px] 
      md:flex md:w-[640px] md:flex-col md:justify-start items-start mt-5
      lg:w-[940px] lg:justify-start lg:items-start lg:text-[20px]"
      >
        <div
          className="w-[280px] text-[#051C12]
          md:w-[420px] lg:w-[620px]"
        >
          <div className="w-full border-b-2 border-[#252B2F]">
            {data?.description}
          </div>
          <div className="w-full flex flex-col">
            <div className="w-full border-b-2 border-[#252B2F]">
              <div
                id="detalle"
                className="w-full cursor-pointer flex justify-between items-center"
                onClick={() => toggle("detalle")}
              >
                <h2
                  className="text-[20px] font-semibold lg:text-[26px]
                  "
                >
                  Detalles del producto
                </h2>
                <img
                  src={selected == "detalle" ? arrowDown : arrowRight}
                  alt={selected == "detalle" ? "arrow down" : "arrow right"}
                />
              </div>
              <div
                className={
                  `item__acordion ` +
                  (selected == `detalle` ? `desplegar` : `no-desplegar`)
                }
              >
                {data?.detail}
              </div>
            </div>
            <div className="w-full border-b-2 border-[#252B2F] mb-4">
              <div
                id="informacion"
                className="w-full cursor-pointer flex justify-between 
                items-center"
                onClick={() => toggle("informacion")}
              >
                <h2
                  className="text-[20px] font-semibold lg:text-[26px]
                  "
                >
                  Información Técnica
                </h2>
                <img
                  src={selected == "informacion" ? arrowDown : arrowRight}
                  alt={selected == "informacion" ? "arrow down" : "arrow right"}
                />
              </div>
              <div
                className={
                  `item__acordion ` +
                  (selected == `informacion` ? `desplegar` : `no-desplegar`)
                }
              >
              {data?.technical_info?.driver_model==""? <></>:<p className="font-semibold">
                  Modelo:
                  <span className="font-normal ml-3">
                    {data?.technical_info?.driver_model}
                  </span>
                </p> }
                {data?.technical_info?.energy_use==""? <></>:<p className="font-semibold">
                  Energía usada: 
                  <span className="font-normal ml-3">
                  {data?.technical_info?.energy_use} </span>
                </p>}
               {data?.measures?.height==""? <></>:<p className="font-semibold">
                  Altura: <span className="font-normal ml-3">
                  {data?.measures?.height} </span>
                </p>} 
                {data?.measures?.width==""?<></>:<p className="font-semibold">
                  Ancho:   <span className="font-normal ml-3">
                  {data?.measures?.width} </span>
                </p>}
                {data?.measures?.base_diameter==""?<></>:<p className="font-semibold">
                  Diámetro de base: <span className="font-normal ml-3">
                  {data?.measures?.base_diameter} </span>
                </p>}
                
                <p className="font-semibold flex mb-4 ">
                  <span className="mr-3">Eficiencia energética:</span>      
                  <TagEfficiency letter={data?.energy_efficiency} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductSelected;
