import React from 'react';
import Header from './Header';
const MainLayout = ({children}) => {
  return (
    <>
    <Header />
    {children}
    <footer>FOOTEER</footer>
    </>
  )
}

export default MainLayout