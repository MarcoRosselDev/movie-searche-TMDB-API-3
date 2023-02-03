import { useEffect, useRef, useState } from 'react'
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom'

import { discover, getTopRated, search } from '../api/tmdb-api'
import { Card } from '../components/card'
import { Section } from '../components/section'
import { Film } from '../interfaces'
import { MediaType } from '../types'
import { tmdbImageSrc } from '../utils'

interface Props {
  type: MediaType | 'search'
}

export const Catalog = (props: Props) => {
  let title = ''
  let request: (page: number) => Promise<{
    totalPages: number
    films: Film[]
  }>
  //
  const [films, setFilms] = useState<Film[]>([])
  const [params, _] = useSearchParams()
  const navigate = useNavigate()

  //
  switch (props.type) {
    case 'movie':
      title = 'Movies'
      request = (page: number) => discover('movie', page)

      break

    case 'tv':
      title = 'TV'
      request = () => discover('tv')
      break

    case 'search':
      title = `Search results for <i>${params.get('q')}</i>`
      break

    default:
      break
  }

  const fetch = async () => {
    setFilms(await request())
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <>
      {/* background */}
      <div className="h-[300px] left-0 right-0 top-0 relative">
        <div className="overlay-film-cover"></div>
        <Image src=""></Image>
      </div>
      {/* poster and text */}
      <Section
        className="-mt-[150px] flex items-center relative z-10 mobile:block"
        title="PAGE TITLE"
      ></Section>
      {/* Films */}
      <Section>
        <div className="grid lg:grid-cols-5 sm:grid-cols-4 mobile:grid-cols-3 relative z-[11]">
          {films.map((film, i) => (
            <div>
              <Card
                imageSrc={tmdbImageSrc(film.posterPath)}
                title={film.title}
                key={i}
              ></Card>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
