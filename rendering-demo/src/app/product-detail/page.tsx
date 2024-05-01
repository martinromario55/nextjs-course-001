import { Product } from '@/components/product'
import { Reviews } from '@/components/reviews'
import React, { Suspense } from 'react'

const ProductDetailPage = () => {
  return (
    <div>
      <h1>Product detail page</h1>
      <Suspense fallback={<p>Loading product detail</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading reviews</p>}>
        <Reviews />
      </Suspense>
    </div>
  )
}

export default ProductDetailPage
