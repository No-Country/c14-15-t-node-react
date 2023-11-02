import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};


const App = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default App;
