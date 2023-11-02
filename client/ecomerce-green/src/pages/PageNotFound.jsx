import React from 'react'
import MainLayout from '../components/MainLayout';
import HeroStore from '../components/HeroStore';
import Error404 from '../components/Error404';
const PageNotFound = () => {
  return (
    <MainLayout>
    <HeroStore />
      <main>
      <Error404 />
      </main>
    </MainLayout>
  )
}

export default PageNotFound