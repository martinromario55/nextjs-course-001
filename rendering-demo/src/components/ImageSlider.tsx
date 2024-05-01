'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import { useTheme } from '@/components/theme-provider'

// import './ImageSlider.css'

export default function ImageSlider() {
  // const theme = useTheme()
  const settings = {
    dots: true,
  }
  return (
    <>
      <h1
      // style={{
      //   color: theme.colors.secondary,
      // }}
      >
        Server Route
      </h1>
      <div className="image-slider-container">
        <Slider>
          <div>
            <img src="https://picsum.photos/400/200" alt="placeholder" />
          </div>
          <div>
            <img src="https://picsum.photos/400/300" alt="placeholder" />
          </div>
          <div>
            <img src="https://picsum.photos/400/250" alt="placeholder" />
          </div>
          <div>
            <img src="https://picsum.photos/400/350" alt="placeholder" />
          </div>
        </Slider>
      </div>
    </>
  )
}
