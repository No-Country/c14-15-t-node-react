import useFetch from "../redux/service/useFetch";

import arrowRight from "./../assets/arrow-right.svg";
import arrowDown from "./../assets/arrow-down.svg";
import { useState } from "react";
import "./../styles/ProductSelected.css";
import TagEfficiency from "./TagEficciency";
import { currency } from "../utils";


const ProductSelected = ({ product, id }) => {
  // const { data } = useFetch(`/${id}`);
const{category, 
  images,
  price,
  description,
  detail,
  name,
  subtitle,
  productEnabled,
  measures,
  energy_efficiency,
  technical_info

} =product 
  console.log("product api",product)

  const formatPrice = currency.format(price)
  console.log(formatPrice)
  // console.log("objeto:", data);
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
            {category?.name} 
          </p>
          <h2 className=" font-semibold text-[32px]">
            {category?.brand_name}
          </h2>
          <span className=" font-light text-[20px]">{name}</span>
          <div className="border-t-2 border-[#252B2F]"></div>
          <span className=" font-extrabold text-[36px]">{formatPrice}</span>
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
            src={images?.cover}
            alt="imagen_1 del producto"
          />
          <img
            className="rounded-lg h-[300px] w-[280px] md:w-[200px] 
            lg:w-[300px] lg:h-[400px]"
            src={images?.picture_1}
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
            {description}
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
                {detail}
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
              {technical_info?.driver_model==""? <></>:<p className="font-semibold">
                  Modelo:
                  <span className="font-normal ml-3">
                    {technical_info?.driver_model} 
                  </span>
                </p> }
                {technical_info?.energy_use==""? <></>:<p className="font-semibold">
                  Energía usada: 
                  <span className="font-normal ml-3">
                  {technical_info?.energy_use} </span>
                </p>}
               {measures?.height==""? <></>:<p className="font-semibold">
                  Altura: <span className="font-normal ml-3">
                  {measures?.height} </span>
                </p>} 
                {measures?.width==""?<></>:<p className="font-semibold">
                  Ancho:   <span className="font-normal ml-3">
                  {measures?.width} </span>
                </p>}
                {measures?.base_diameter==""?<></>:<p className="font-semibold">
                  Diámetro de base: <span className="font-normal ml-3">
                  {measures?.base_diameter} </span>
                </p>}
                
                <p className="font-semibold flex mb-4 ">
                  <span className="mr-3">Eficiencia energética:</span>      
                  <TagEfficiency letter={energy_efficiency} />
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
