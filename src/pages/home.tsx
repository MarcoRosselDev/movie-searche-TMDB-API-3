import { Section } from '../components/section'
import { Slider } from '../components/slider/slider'
import { useEffect, useState } from 'react'
import { Film } from '../interfaces'
import { TrendingsHero } from '../components/trending-hero'
import { Card } from '../components/card'

export const Home = () => {
  //
  const [trendings, setTrendings] = useState<Film[]>([])
  const [inTheaters, setInTheaters] = useState<Film[]>([])

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
    setInTheaters(arrs)
  }

  useEffect(() => {
    fetchTrending()
  }, [])

  return (
    <>
      {/* trendings */}
      <Section className="py-0">
        <Slider
          className="slick-hero"
          autoplay={true}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {trendings.map((film, i) => (
            <TrendingsHero film={film} key={i}></TrendingsHero>
          ))}
        </Slider>
      </Section>
      {/* in theaters */}
      <Section title="In Theaters">
        <Slider
          isMovieCard={true}
          className="click-hero"
          autoplay={true}
          slidesToShow={5}
          slidesToScroll={5}
        >
          {inTheaters.map((film, i) => (
            <Card film={film} key={i}></Card>
          ))}
        </Slider>
      </Section>
      {/* populars */}
      {/* top rated tv */}
      {/* to rated movies */}
    </>
  )
}
