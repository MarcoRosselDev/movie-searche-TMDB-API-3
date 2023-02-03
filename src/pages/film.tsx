import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Image } from '../components/image'
import { Section } from '../components/section'
import { MediaType } from '../types'
import { Cast, Trailer, Film as FilmInterface } from '../interfaces'
import { Card } from '../components/card'
import { Slider } from '../components/slider/slider'
import { getCasts, getDetail, getTrailers } from '../api/tmdb-api'
import { tmdbImageSrc, youtubeThumbnail } from '../utils'
import { useGlobalContext } from '../components/app-container'
import { Loading } from '../components/loading'

interface Props {
  mediaType: MediaType
}

export const Film = (props: Props) => {
  //
  const location = useLocation()
  const navigate = useNavigate()
  const { id } = useParams<any>()
  //
  const [film, setFilm] = useState<FilmInterface | null | undefined>(null)

  const [casts, setCasts] = useState<Cast[]>([])
  const [trailers, setTrailers] = useState<Trailer[]>([])
  const [recommendations, setRecommendations] = useState<FilmInterface[]>([])

  const globalContext = useGlobalContext()

  const fetch = async () => {
    const film = await getDetail(props.mediaType, parseInt(id as string))

    if (film) {
      setFilm(film)
      setCasts(await getCasts(film.mediaType, film.id))
      setTrailers(await getTrailers(film.mediaType, film.id))
    }
  }

  useEffect(() => {
    setFilm(undefined)
    fetch()
  }, [])

  if (film === null) {
    // redirect to 404 page
    return <>404</>
  } else if (film === undefined) {
    return (
      <div className="text-center p-6 h-full flex-1">
        <Loading></Loading>
      </div>
    )
  }
  return (
    <>
      {/* background */}
      <div className="h-[300px] left-0 right-0 top-0 relative">
        <div className="overlay-film-cover"></div>
        <Image
          src={tmdbImageSrc(film.coverPath)}
          className="rounded-0 rounded-none"
        ></Image>
      </div>
      {/* poster and text */}
      <Section className="-mt-[150px] flex items-center relative z-10 mobile:block">
        <Image
          src={tmdbImageSrc(film.posterPath)}
          className="w-[200px] min-w-[200px] h-[300px] mobile:mx-auto"
        ></Image>
        <div className="px-3 flex flex-col items-start gap-3">
          <p className="text-xl line-clamp-1">{film.title}</p>
          <ul className="flex items-center gap-3">
            {film.genreIds.map((id, i) => (
              <li
                key={id}
                className="px-3 py-1.5 bg-primary rounded-lg text-sm"
              >
                {
                  globalContext.genres[film.mediaType]?.find((g) => g.id === id)
                    ?.name
                }
              </li>
            ))}
          </ul>
          <p className="line-clamp-3 opacity-[0.9]">{film.description}</p>
        </div>
      </Section>
      {/* cast */}

      <Section title="Casts">
        <div className="scrollbar scrollbar-thumb-primary scrollbar-track-header">
          <div className="flex items-center gap-3">
            {casts.map((cast, i) => (
              <div className="flex-shrink-0 w-[200px] mb-6" key={i}>
                <Card imageSrc={tmdbImageSrc(cast.profilePath)} key={i}>
                  <p className="font-semibold">{cast.name}</p>
                  <p className="opacity-[0.9] text-sm">{cast.characterName}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Section>
      {/* trailers */}
      <Section title="Trailers">
        <div className="scrollbar scrollbar-thumb-primary scrollbar-track-header">
          <div className="flex items-center gap-3 h-[300px]">
            {trailers.map((trailer, i) => (
              <div className="flex-shrink-0 w-[300px] my-3">
                <Card
                  imageSrc={youtubeThumbnail(trailer.key)}
                  title="lorem ipsum"
                  key={i}
                ></Card>
              </div>
            ))}
          </div>
        </div>
      </Section>
      {/* seasons */}
      <Section title="Seasons">
        <Slider slidesToShow={2} slidesToScroll={2} swipe={false}>
          {() =>
            film.seasons.map((season, i) => (
              <Card
                onClick={() =>
                  navigate(`/tv/${film.id}/season/${season.seasonNumber}`)
                }
                title={season.name}
                imageSrc={tmdbImageSrc(season.posterPath)}
                key={i}
              ></Card>
            ))
          }
        </Slider>
      </Section>
      {/* recommendations */}
      <Section title="Recommendations">
        <Slider isMovieCard={true} autoplay={true}>
          {(_) =>
            recommendations.map((season, i) => (
              <Card title={film.title} imageSrc="" key={i}></Card>
            ))
          }
        </Slider>
      </Section>
    </>
  )
}
