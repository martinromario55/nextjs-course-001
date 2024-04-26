import React from 'react'

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count)
}

const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  const random = getRandomInt(2)

  if (random === 1) {
    throw new Error('Error loading Product')
  }
  return (
    <div>
      {children}
      <h2>Feature Products</h2>
    </div>
  )
}

export default ProductDetailsLayout
