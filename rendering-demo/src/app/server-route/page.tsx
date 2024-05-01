import React from 'react'
import { serverSideFunction } from '../utils/server-utils'
import ImageSlider from '@/components/ImageSlider'

const ServerRoutePage = () => {
  console.log('Server route rendered')
  const result = serverSideFunction()
  return (
    <div>
      <h1>Server Route Page</h1>
      <p>{result}</p>
      <ImageSlider />
    </div>
  )
}

export default ServerRoutePage
