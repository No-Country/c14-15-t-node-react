import  '../styles/ProductHero.css';


import { AiOutlineDown } from "react-icons/ai";

const ProductFilters = ({orderProduct, motorolaFilter, nokiaFilter, huaweiFilter}) => {

  return (
    <section className="dropdown-container">
        <div className="container-drop">
      <div className="dropdown">
        <button className="dropbtn">Ordenar <AiOutlineDown className="icon-dropdown"/></button>
        <div className="dropdown-content">
          <a className='btn-drop' onClick={() =>orderProduct("lowerPrice")} >De menor a mayor</a>
          <a className='btn-drop' onClick={() =>orderProduct("higherPrice") } >De mayor a menor</a>
          <a className='btn-drop' onClick={() =>orderProduct("name") } >Nombre</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Precio <AiOutlineDown className="icon-dropdown"/></button>
        <div className="dropdown-content">
          <a className='btn-drop' href="#">Link 1</a>
          <a className='btn-drop' href="#">Link 2</a>
          <a className='btn-drop' href="#">Link 3</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Categoría <AiOutlineDown className="icon-dropdown"/></button>
        <div className="dropdown-content">
          <a className='btn-drop' href="#">Link 1</a>
          <a className='btn-drop' href="#">Link 2</a>
          <a className='btn-drop' href="#">Link 3</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Marca <AiOutlineDown className="icon-dropdown"/></button>
        <div className="dropdown-content">
          <a className='btn-drop' onClick={() => motorolaFilter("Motorola")}>Motorola</a>
          <a className='btn-drop' onClick={() => nokiaFilter("Nokia")}>Nokia</a>
          <a className='btn-drop' onClick={() => huaweiFilter("Huawei")}>Huawei</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Etiqueta energetica <AiOutlineDown className="icon-dropdown"/></button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    
      </div>
    </section>
  );
};

export default ProductFilters;
