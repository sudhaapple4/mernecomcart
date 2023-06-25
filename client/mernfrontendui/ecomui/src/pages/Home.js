
import React, { useCallback } from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductList from '../features/product/components/ProductList'

const Home = () => {
    // const ProductLists= useCallback(ProductList,[])
  return (
    <div className='bg-gray-100'>
        <Navbar>
            <ProductList/>
        </Navbar>
    </div>
  )
}

export default Home