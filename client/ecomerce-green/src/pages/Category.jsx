import { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import HeroStore from "../components/HeroStore";
import ProductFilters from "../components/ProductFilters";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import ProductList from "../components/ProductList";
import { fetchCategory } from "../redux/store/productFilter/productFilterAction";
import { useParams } from "react-router-dom";
import Breadcrums from "../components/Breadcrums";
import { AiOutlineSearch } from "react-icons/ai";
import {
   setSearchProduct 
  } from "../redux/store/productFilter/productFilterSlice";

const Category = () => {
  const dispatch = useDispatch();

  const { productsfilter, 
    isLoading ,
    searchedProduct
     } = useSelector(
    (state) => state.productsfilter
  );
  const { category } = useParams();
  const [productsData, setProductsData] = useState([]);
  const [productsData1, setProductsData1] = useState([]);
  const [productsData2, setProductsData2] = useState([]);
  const [productsData3, setProductsData3] = useState([]);
  const [productsData4, setProductsData4] = useState([]);
  const [energyLabelData, setenergyLabelData] = useState([]);
  const [energyLabelData1, setenergyLabelData1] = useState([]);
  const [energyLabelData2, setenergyLabelData2] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);



  console.log(category);
  useEffect(() => {
    dispatch(fetchCategory(category, currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (productsfilter.products && productsfilter.products.length > 0) {
      setProductsData(productsfilter.products);
    }
  }, [productsfilter.products]);

  useEffect(() => {
    setProductsData1(productsfilter.products);
  }, [productsfilter.products]);
  useEffect(() => {
    setProductsData2(productsfilter.products);
  }, [productsfilter.products]);
  useEffect(() => {
    setProductsData3(productsfilter.products);
  }, [productsfilter.products]);
  useEffect(() => {
    setProductsData4(productsfilter.products);
  }, [productsfilter.products]);

  // ...............................................................................................................

  useEffect(() => {
    setenergyLabelData(productsfilter.products);
  }, [productsfilter.products]);
  useEffect(() => {
    setenergyLabelData1(productsfilter.products);
  }, [productsfilter.products]);
  useEffect(() => {
    setenergyLabelData2(productsfilter.products);
  }, [productsfilter.products]);
  
  // ...............................................................................................................
  const handlerSearchProduct = (e) =>{
    dispatch(setSearchProduct(e.target.value))
    if (searchedProduct) {
      const products = productsfilter.products?.filter((item) =>{
   
       return item.name.toLowerCase().includes(searchedProduct.toLowerCase() )|| item.category.brand_name.toLowerCase().includes(searchedProduct.toLowerCase()  )
     
      }) 
      console.log("busqueda",products)
      setProductsData(products)
   
    } 

   }
  
 // ...............................................................................................................
  const orderProduct = (string) => {
    if (string === "lowerPrice") {
      const sortedProducts = [...productsData]; // Clona el arreglo
      sortedProducts.sort((producto1, producto2) => {
        return producto1.price - producto2.price;
      });
      setProductsData(sortedProducts); // Actualiza el estado para reflejar los productos ordenados
    }
    if (string === "higherPrice") {
      const sortedProducts = [...productsData]; // Clona el arreglo
      sortedProducts.sort((producto1, producto2) => {
        return producto2.price - producto1.price; // Ordenar de mayor a menor
      });
      setProductsData(sortedProducts); // Actualiza el estado para reflejar los productos ordenados
    }
    if (string === "name") {
      const sortedProducts = [...productsData];
      sortedProducts.sort((producto1, producto2) => {
        return producto1.name.localeCompare(producto2.name); // Ordenar alfabéticamente por nombre
      });
      setProductsData(sortedProducts);
    }
    // return productsData
  };

  const brandUnics = [
    ...new Set(productsData.map((producto) => producto.category.brand_name)),
  ];
  const energyUnics = [
    ...new Set(productsData.map((producto) => producto.energy_efficiency)),
  ];


  console.log("brand", brandUnics);
  console.log("energy", energyUnics);
  const brandFilter = (string) => {
    if (string === "Motorola") {
      let Products = [...productsData3];
      let filtro = Products.filter((product) => {
        if (product.category.brand_name == "Motorola") {
          console.log(product.category.brand_name);
          return product;
        }
      });
      setProductsData(filtro);
    }

    if (string === "Nokia") {
      let Products1 = [...productsData1];
      let filtro = Products1.filter((product) => {
        if (product.category.brand_name == "Nokia") {
          console.log(product.category.brand_name);
          return product;
        }
      });
      setProductsData(filtro);
    }

    if (string === "Huawei") {
      let Products2 = [...productsData2];
      let filtro = Products2.filter((product) => {
        if (product.category.brand_name == "Huawei") {
          console.log(product.category.brand_name);
          return product;
        }
      });
      setProductsData(filtro);
    }
  };

  //   // .....................................................................................................................................................................................

  const categoryFilter = (string) => {
  
    navigate("/products/category/:name");
    // dispatch(fetchCategory(string, currentPage));
  };

  // .....................................................................................................................................................................................

  const energyLabelFilter = (string) => {
    if (string === "A") {
      let Products = [...energyLabelData];
      let filtro = Products.filter((product) => {
        if (product.energy_efficiency == "A") {
          console.log(product.energy_efficiency);
          return product;
        }
      });
      setProductsData(filtro);
    }

    if (string === "B") {
      let Products1 = [...energyLabelData1];
      let filtro = Products1.filter((product) => {
        if (product.energy_efficiency == "B") {
          console.log(product.energy_efficiency);
          return product;
        }
      });
      setProductsData(filtro);
    }

    if (string === "C") {
      let Products2 = [...energyLabelData2];
      let filtro = Products2.filter((product) => {
        if (product.energy_efficiency == "C") {
          console.log(product.energy_efficiency);
          return product;
        }
      });
      setProductsData(filtro);
    }
  };
  // .....................................................................................................................................................................................

  const onPageChange = (newPage) => {
    // Update the current page and trigger a fetch for the new page
    setCurrentPage(newPage);
  };

  return (
    <MainLayout>
      <main>
        <HeroStore />
        <Breadcrums category={category} />
        <ProductFilters
          
          brandUnics={brandUnics}
          energyUnics={energyUnics}
          orderProduct={orderProduct}
          brandFilter={brandFilter}
          categoryFilter={categoryFilter}
          energyLabelFilter={energyLabelFilter}
        />
        <div className="mx-auto w-[15rem] flex g-2 items-center border rounded-xl h-10 px-3 mt-4 bg-slate-50">
          <input
           value={searchedProduct}
           onChange={handlerSearchProduct}
            className="border-none text-black bg-slate-50 focus:border-none active:border-none w-full"
            placeholder="Buscador"
            type="text"
          />
          <AiOutlineSearch className="text-gray-800" />
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <ProductList
            totalPages={productsfilter.totalPages}
            onPageChange={onPageChange}
            page={productsfilter.page}
            productsData={productsData}
          />
        )}
      </main>
    </MainLayout>
  );
};

export default Category;
