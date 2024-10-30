import ProductList from '@/components/ProductList'
import React from 'react'

const Deals = () => {
  return (
    <div>
        <ProductList
        categoryId={process.env.NEXT_PUBLIC_DEALS_ID!}
        />
    </div>
  )
}

export default Deals