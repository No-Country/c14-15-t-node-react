import React  from "react";


const Marks = ({ images }) => {


  return (
    <div className="w-[100vw] max-w-6xl mx-auto px-3 sm:px-2 md:px-4  py-13 ">
      <div className="w-full max-w-5xl mx-auto px-1 md:px-2 py-10">
        <div className="text-center">
          {/* <!-- Logo Carousel animation --> */}
          <div
            x-data="{}"
            x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          >
            <ul
              x-ref="logos"
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll ease-in-out duration-700"
            >
              {images.map((el) => (
                <li className="ease-in-out duration-1000" key={el.id}>
                <img className="md:h-20 md:max-w-xs" src={el.image} alt={el.image} />
              </li>
              ))}
            </ul>
          
          </div>
          {/* <!-- End: Logo Carousel animation --> */}
        </div>
      </div>
    </div>
  );
};

export default Marks;
