import useFetch from "../redux/service/useFetch";

const ProductSelected = ({ id }) => {
  const { data } = useFetch(`/${id}`);
  console.log(data);

  return (
    <section>
      <div>
        <p>{data?.description}</p>
        <h2>{data?.name}</h2>
        <span>{data?.technical_specifications}</span>
        <div className="border-t-2 border-[#252B2F]"></div>
        <span>{data?.price}</span>
        <button
          className="mt-3 text-[20px] text-[white] bg-[#F8924FF2] hover:bg-[#ea8847] w-full h-[40px] 
          flex justify-center items-center rounded-lg font-medium"
          type='submit'
        >Agregar al carrito
        </button>
        <button
          className="mt-3 text-[20px] text-[white] bg-[#34946A] hover:bg-[#258059] w-full h-[40px] 
          flex justify-center items-center rounded-lg font-medium"
        >Comprar
        </button>
      </div>
      <div>
        <img src={data?.images.cover} alt="imagen_1 del producto" />
        <img src={data?.images.picture_1} alt="imagen_2 del producto" />
      </div>
    </section>
  );
};
export default ProductSelected;
