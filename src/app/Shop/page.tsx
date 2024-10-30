import ProductList from '@/components/ProductList'
import React from 'react'

const Shop = () => {
  return (
    <div>
        <ProductList
        categoryId={process.env.NEXT_PUBLIC_SHOP_ID!}
        />
    </div>
  )
}

export default Shop