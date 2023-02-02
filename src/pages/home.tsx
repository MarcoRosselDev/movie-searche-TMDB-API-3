import { Section } from '../components/section'
import { Slider } from '../components/slider/slider'
import { useEffect, useState } from 'react'
import { Film } from '../interfaces'
import { TrendingsHero } from '../components/trending-hero'
import { Card } from '../components/card'
import { useNavigate } from 'react-router-dom'
import {
  getInTheaser,
  getPopulars,
  getTopRated,
  getTrendings,
} from '../api/tmdb-api'
import { isFilm, mergeFilm, tmdbImageSrc } from '../utils'
// import { Film } from './film'

export const Home = () => {
  //
  const navigate = useNavigate()

  const [trendings, setTrendings] = useState<Film[]>([])
  const [inTheaters, setInTheaters] = useState<Film[]>([])
  const [populars, setPopulars] = useState<Film[]>([])
  const [topRatedTV, setTopRatedTV] = useState<Film[]>([])
  const [topRatedMovies, setTopRatedMovies] = useState<Film[]>([])

  const goToDetailPage = (film: Film) => {
    navigate(`/${film.mediaType}/${film.id}`)
  }

  const fetchTopRatedMovies = async () => {
    setTopRatedMovies(await getTopRated('movie'))
  }
  const fetchTopRatedTV = async () => {
    setTopRatedTV(await getTopRated('tv'))
  }

  const fetchPopulars = async () => {
    const movies = await getPopulars('movie')
    const tvs = await getPopulars('tv')

    const arrs: Film[] = []

    setPopulars(mergeFilm(movies, tvs, 20))
  }

  const fetchInTeaters = async () => {
    setInTheaters(await getInTheaser())
  }

  const fetchTrending = async () => {
    const movies = await getTrendings('movie')
    const tvs = await getTrendings('tv')

    const arrs: Film[] = []

    setTrendings(mergeFilm(movies, tvs))
  }

  useEffect(() => {
    // fetch()
    fetchTrending()
    fetchInTeaters()
    fetchPopulars()
    fetchTopRatedTV()
    fetchTopRatedMovies()
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
        <Slider isMovieCard={true} autoplay={true}>
          {(_) =>
            inTheaters.map((film, i) => (
              <Card
                onClick={() => goToDetailPage(film)}
                title={film.title}
                imageSrc={tmdbImageSrc(film.posterPath)}
                key={i}
              ></Card>
            ))
          }
        </Slider>
      </Section>
      {/* populars */}
      <Section title="What's Popular">
        <Slider isMovieCard={true} autoplay={true}>
          {(_) =>
            populars.map((film, i) => (
              <Card
                onClick={() => goToDetailPage(film)}
                title={film.title}
                imageSrc={tmdbImageSrc(film.posterPath)}
                key={i}
              ></Card>
            ))
          }
        </Slider>
      </Section>
      {/* top rated tv */}
      <Section title="Top Rated TV">
        <Slider isMovieCard={true} autoplay={true}>
          {(_) =>
            topRatedTV.map((film, i) => (
              <Card
                onClick={() => goToDetailPage(film)}
                title={film.title}
                imageSrc={tmdbImageSrc(film.posterPath)}
                key={i}
              ></Card>
            ))
          }
        </Slider>
      </Section>
      {/* to rated movies */}
      <Section title="Top Rated Movies">
        <Slider isMovieCard={true} autoplay={true}>
          {(_) =>
            topRatedMovies.map((film, i) => (
              <Card
                onClick={() => goToDetailPage(film)}
                title={film.title}
                imageSrc={tmdbImageSrc(film.posterPath)}
                key={i}
              ></Card>
            ))
          }
        </Slider>
      </Section>
    </>
  )
}
