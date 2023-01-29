import './slider.css'

import Slick, { Settings } from 'react-slick'

export const Slider = (props: Settings) => {
  return (
    <Slick autoplay={false} {...props} autoplaySpeed={5000}>
      {props.children}
    </Slick>
  )
}
