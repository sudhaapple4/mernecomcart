
import React, { useCallback } from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductList from '../features/product/components/ProductList'

const Home = () => {
    // const ProductLists= useCallback(ProductList,[])
  return (
    <div>
        <Navbar>
            <ProductList/>
        </Navbar>
    </div>
  )
}

export default Home