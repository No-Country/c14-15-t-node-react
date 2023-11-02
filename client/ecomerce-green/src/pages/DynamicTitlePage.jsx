import  { useState, useEffect } from 'react';


function DynamicTitlePage() {
  const [pageTitle, setPageTitle] = useState('Nuestros Productos');


  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);


  return (
    <div>


    </div>
  );
}

export default DynamicTitlePage;
