import React, { useState, useEffect } from 'react';

function DynamicTitlePage() {
  const [pageTitle, setPageTitle] = useState('Nuestros Productos');

  // Esto se ejecutará cuando el componente de diseño se monte o cuando `pageTitle` cambie.
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);


  return (
    <div>
   
    </div>
  );
}

export default DynamicTitlePage;
