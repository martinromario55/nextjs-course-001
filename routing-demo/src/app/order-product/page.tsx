'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const OrderProduct = () => {
  const router = useRouter()

  const handleClick = () => {
    console.log('Placing your order')
    // router.push('/')
    router.replace('/')
  }
  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place order</button>
    </div>
  )
}

export default OrderProduct
