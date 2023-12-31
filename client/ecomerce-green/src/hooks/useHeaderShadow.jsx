import { useEffect, useState } from "react";

const useHeaderShadow = () => {
const [headerShadow, setHeaderShadow] = useState("text-white bg-[#051C12]  md:bg-stone-400/[.70]")
  //to handle shadow of header
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setHeaderShadow("text-white bg-[#051C12]")
      } else {
        setHeaderShadow("text-white bg-[#051C12]  md:bg-stone-400/[.70]");
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return headerShadow
};

export default useHeaderShadow;