import { Section } from '../components/section'
import Slider from 'react-slick'
import { useState } from 'react'
import { Film } from '../interfaces'

export const Home = () => {
  //
  const [trendings, setTrendings] = useState<Film[]>([])

  return (
    <>
      {/* trendings */}
      <Section>
        <Slider></Slider>
      </Section>
      {/* in theaters */}
      {/* populars */}
      {/* top rated tv */}
      {/* to rated movies */}
    </>
  )
}
