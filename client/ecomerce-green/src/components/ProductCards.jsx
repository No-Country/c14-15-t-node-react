
const ProductCards = () => {
  return (
    <section className="card-container py-10 flex flex-col justify-center items-center w-screen min-w-min gap-10 flex-wrap md:flex-row">
    <div className="product-card flex-column w-72 min-width-[276px] mt-20 divide-y divide-gray-950">
        <img src="/ProductImg.png" alt="" className="object-cover"/>
        <div className="description flex place-content-between items-center pb-3">
          <div>
        <p className="text-xl font-semibold mt-4">Jinko Solar</p>
        <p className="text-lg font-light">Tiger Neo 78HC</p>
        </div>
        <span className="energy-label a-tag flex items-center justify-center">
          <p className="text-white text-3xl font-extrabold text-center">A</p></span>
        </div>
        <div className="flex place-content-between items-center pt-3">
        <p className="text-3xl font-extrabold">$172.703</p>
        <img src="/CartIcon.svg" alt="" className="w-12 cursor-pointer" />
        </div>
    </div>
    <div className="product-card flex-column w-72 min-width-[276px] mt-20 divide-y divide-gray-950">
        <img src="/ProductImg2.png" alt="" className="object-cover"/>
        <div className="description flex place-content-between items-center pb-3">
          <div>
        <p className="text-xl font-semibold mt-4">Trina Solar</p>
        <p className="text-lg font-light">Vertex N 610W</p>
        </div>
        <span className="energy-label b-tag flex items-center justify-center">
          <p className="text-white text-3xl font-extrabold text-center">B</p></span>
        </div>
        <div className="flex place-content-between items-center pt-3">
        <p className="text-3xl font-extrabold">$101.864</p>
        <img src="/CartIcon.svg" alt="" className="w-12 cursor-pointer" />
        </div>
    </div>
    <div className="product-card flex-column w-72 min-width-[276px] mt-20 divide-y divide-gray-950">
        <img src="/ProductImg.png" alt="" className="object-cover"/>
        <div className="description flex place-content-between items-center pb-3">
          <div>
        <p className="text-xl font-semibold mt-4">Jinko Solar</p>
        <p className="text-lg font-light">Tiger Neo 78HC</p>
        </div>
        <span className="energy-label a-tag flex items-center justify-center">
          <p className="text-white text-3xl font-extrabold text-center">A</p></span>
        </div>
        <div className="flex place-content-between items-center pt-3">
        <p className="text-3xl font-extrabold">$172.703</p>
        <img src="/CartIcon.svg" alt="" className="w-12 cursor-pointer" />
        </div>
    </div>
    </section>
  )
}

export default ProductCards