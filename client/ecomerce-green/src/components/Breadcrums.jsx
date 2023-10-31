import React from 'react'
import Category from '../pages/Category'

const Breadcrums = ({category}) => {
  return (
<nav className="">
<ul className=" max-w-5xl mx-auto list-reset flex text-lg text-black font-semibold cursor-pointer">
<li className='ml-3'>
      <a
        href="#"
        className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
        >Producto  &gt;</a>
    </li>
    <li>
      <span className="mx-2 text-neutral-500 dark:text-neutral-400"></span>
    </li>
    <li>
      <a
        href="#"
        className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
        >Categoria  &gt;</a>
    </li>
    <li>
      <span className="mx-2 text-green-900 dark:text-neutral-400"></span>
    </li>
    <li className="text-neutral-500 dark:text-neutral-400">{category}</li>
  </ul>
</nav>
  )
}

export default Breadcrums