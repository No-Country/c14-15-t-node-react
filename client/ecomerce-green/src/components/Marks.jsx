import React  from "react";


const Marks = ({ images }) => {
  console.log(images);

  return (
    <div className="w-[100vw] max-w-6xl mx-auto px-4 md:px-6 py-13 ">
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
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
              class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            >
              {images.map((el) => (
                <li>
                  <img className=" md:h-20 md:max-w-xs" src={el.image} key={`${el.id}2` } alt={el.image} />
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
