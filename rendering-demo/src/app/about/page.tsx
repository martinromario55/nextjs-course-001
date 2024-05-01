import { cookies } from 'next/headers'
import React from 'react'

const AboutPage = () => {
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')
  console.log('Cookie:', theme)
  console.log('About Page')
  return <h1>About Page {new Date().toLocaleTimeString()}</h1>
}

export default AboutPage
