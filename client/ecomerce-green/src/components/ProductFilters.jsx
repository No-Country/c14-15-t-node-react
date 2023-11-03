import  '../styles/ProductHero.css';
import { useDispatch} from "react-redux";
import { AiOutlineDown } from "react-icons/ai";
import { useState } from 'react';

const ProductFilters = ({orderProduct, brandFilter, page, categoryFilter, energyLabelFilter}) => {
  const dispatch = useDispatch();
  const [productsData, setProductsData] = useState([]);
  



  
  const categoryUnics = [
    ...new Set(productsData.map((producto) => producto.category.name)),
  ];


  return (
    <section className="dropdown-container">
        <div className="container-drop">
      <div className="dropdown">
        <button className="dropbtn">Ordenar <AiOutlineDown className="icon-dropdown"/></button>
        <div className="dropdown-content">
         
          <a className='btn-drop' onClick={() =>orderProduct("name") } >Nombre</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Precio <AiOutlineDown className="icon-dropdown"/></button>
        <div className="dropdown-content">
        <a className='btn-drop' onClick={() =>orderProduct("lowerPrice")} >De menor a mayor</a>
        <a className='btn-drop' onClick={() =>orderProduct("higherPrice") } >De mayor a menor</a>
         
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Categoría <AiOutlineDown className="icon-dropdown"/></button>
        <div className="dropdown-content">
       
          <a className='btn-drop' onClick={() => categoryFilter("Celulares")}>Celulares</a>
        
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Marca <AiOutlineDown className="icon-dropdown"/></button>
        <div className="dropdown-content">
          <a className='btn-drop' onClick={() => brandFilter("Motorola")}>Motorola</a>
          <a className='btn-drop' onClick={() => brandFilter("Nokia")}>Nokia</a>
          <a className='btn-drop' onClick={() => brandFilter("Huawei")}>Huawei</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Etiqueta energetica <AiOutlineDown className="icon-dropdown"/></button>
        <div className="dropdown-content">
          <a className='btn-drop' onClick={() => energyLabelFilter("A")}>A</a>
          <a className='btn-drop' onClick={() => energyLabelFilter("B")}>B</a>
          <a className='btn-drop' onClick={() => energyLabelFilter("C")}>C</a>
        </div>
      </div>
    
      </div>
    </section>
  );
};

export default ProductFilters;
