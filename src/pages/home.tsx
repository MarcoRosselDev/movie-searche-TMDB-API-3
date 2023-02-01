import { Section } from '../components/section'
import { Slider } from '../components/slider/slider'
import { useEffect, useState } from 'react'
import { Film } from '../interfaces'
import { TrendingsHero } from '../components/trending-hero'
import { Card } from '../components/card'
import { useNavigate } from 'react-router-dom'
import { getInTheaser, getTrendings } from '../api/tmdb-api'
import { isFilm, tmdbImageSrc } from '../utils'
// import { Film } from './film'

export const Home = () => {
  //
  const navigate = useNavigate()

  const [trendings, setTrendings] = useState<Film[]>([])
  const [inTheaters, setInTheaters] = useState<Film[]>([])

  const fetchInTeaters = async () => {
    setInTheaters(await getInTheaser())
  }

  const fetchTrending = async () => {
    const movies = await getTrendings('movie')
    const tvs = await getTrendings('tv')

    const arrs: Film[] = []

    for (let i = 0; i < 6; i++) {
      let film: unknown

      if (i % 2 == 1) {
        if (tvs[i - 1]) {
          film = tvs[i - 1]
        }
      } else {
        if (movies[i - 1]) {
          film = tvs[i - 1]
        }
      }
      if (isFilm(film)) arrs.push(film)
    }
    setTrendings(arrs)
  }

  useEffect(() => {
    // fetch()
    fetchTrending()
    fetchInTeaters()
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
          {(onSwipe) =>
            trendings.map((film, i) => (
              <TrendingsHero
                onClick={() =>
                  !onSwipe ? navigate(`/${film.mediaType}/${film.id}`) : ''
                }
                film={film}
                key={i}
              ></TrendingsHero>
            ))
          }
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
          {(_) =>
            inTheaters.map((film, i) => (
              <Card
                title={film.title}
                imageSrc={tmdbImageSrc(film.posterPath)}
                key={i}
              ></Card>
            ))
          }
        </Slider>
      </Section>
      {/* populars */}
      {/* top rated tv */}
      {/* to rated movies */}
    </>
  )
}
