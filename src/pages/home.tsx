import { Section } from '../components/section'
import { Slider } from '../components/slider/slider'
import { useEffect, useState } from 'react'
import { Film } from '../interfaces'
import { TrendingsHero } from '../components/trending-hero'
import { Card } from '../components/card'
import { useNavigate } from 'react-router-dom'
import { getTrendings } from '../api/tmdb-api'
// import { Film } from './film'

export const Home = () => {
  //
  const navigate = useNavigate()

  const [trendings, setTrendings] = useState<Film[]>([])
  const [inTheaters, setInTheaters] = useState<Film[]>([])

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
      if (isFilm(film)) {
        arrs.push(film)
      }
    }
    setTrendings(arrs)
  }

  const fetch = () => {
    const arrs: Film[] = []
    for (let i = 0; i < 5; i++) {
      arrs.push({
        id: i,
        mediaType: 'tv',
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
    fetch()
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
              <Card title={film.title} imageSrc="" key={i}></Card>
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
