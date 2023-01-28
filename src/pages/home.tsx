import { Section } from '../components/section'
import Slider from 'react-slick'
import { useEffect, useState } from 'react'
import { Film } from '../interfaces'

export const Home = () => {
  //
  const [trendings, setTrendings] = useState<Film[]>([])

  const fetchTrending = () => {
    const arrs: Film[] = []
    for (let i = 0; i < 5; i++) {
      arrs.push({
        id: i,
        title: 'Lorem ipsumdolo sit emet consectetur adipsisicing elit,',
        description:
          'Lorem ipsumdolo sit emet consectetur adipsisicing elit, quam, susciipit? pariatur non ipse alias at, iure, repellat',
        coverPath: '',
        genreIds: [1, 2, 3, 4, 5, 6],
        posterPath: '',
        seasons: [],
      })
    }
    setTrendings(arrs)
  }

  useEffect(() => {
    fetchTrending()
  }, [])

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
