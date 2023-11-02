import { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import HeroStore from "../components/HeroStore";
import ProductFilters from "../components/ProductFilters";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/store/product/productAction";
import Loader from "../components/Loader";
import ProductList from "../components/ProductList";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products, isLoading } = useSelector((state) => state.products);
  const { productsfilter } = useSelector((state) => state.productsfilter);
  const [productsData, setProductsData] = useState([]);
  const [productsData1, setProductsData1] = useState([]);
  const [productsData2, setProductsData2] = useState([]);
  const [productsData3, setProductsData3] = useState([]);
  const [productsData4, setProductsData4] = useState([]);
  const [energyLabelData, setenergyLabelData] = useState([]);
  const [energyLabelData1, setenergyLabelData1] = useState([]);
  const [energyLabelData2, setenergyLabelData2] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    setProductsData(products.products); // Actualizar el estado cuando cambian los productos
  }, [products.products]);

  useEffect(() => {
    if (productsfilter.products && productsfilter.products.length > 0) {
      setProductsData(productsfilter.products);
    }
  }, [productsfilter.products]);

  useEffect(() => {
    setProductsData1(products.products);
  }, [products.products]);
  useEffect(() => {
    setProductsData2(products.products);
  }, [products.products]);
  useEffect(() => {
    setProductsData3(products.products);
  }, [products.products]);
  useEffect(() => {
    setProductsData4(products.products);
  }, [products.products]);

  // ...............................................................................................................

  useEffect(() => {
    setenergyLabelData(products.products);
  }, [products.products]);
  useEffect(() => {
    setenergyLabelData1(products.products);
  }, [products.products]);
  useEffect(() => {
    setenergyLabelData2(products.products);
  }, [products.products]);

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

  // .....................................................................................................................................................................................

  const categoryFilter = (string) => {
    console.log("categoria elegida", string);
    // Lalamarla
    // dispatch(fetchCategory(string, currentPage));
    navigate(`/category/${string}`);
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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <MainLayout>
      <main>
        <HeroStore />
        <ProductFilters
          orderProduct={orderProduct}
          brandFilter={brandFilter}
          categoryFilter={categoryFilter}
          energyLabelFilter={energyLabelFilter}
        />

        {isLoading ? (
          <Loader />
        ) : (
          <ProductList
            totalPages={products.totalPages}
            onPageChange={onPageChange}
            page={products.page}
            productsData={productsData}
          />
        )}
      </main>
    </MainLayout>
  );
};

export default Products;
