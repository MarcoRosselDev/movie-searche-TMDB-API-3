import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Image } from '../components/image'
import { Section } from '../components/section'
import { MediaType } from '../types'
import { Cast, Trailer, Film as FilmInterface } from '../interfaces'
import { Card } from '../components/card'
import { Slider } from '../components/slider/slider'
import { getDetail } from '../api/tmdb-api'
import { tmdbImageSrc } from '../utils'

interface Props {
  mediaType: MediaType
}

export const Film = (props: Props) => {
  //
  const navigate = useNavigate()
  const { id } = useParams<any>()
  //
  const [film, setFilm] = useState<FilmInterface | null | undefined>(null)

  const [casts, setCasts] = useState<Cast[]>([])
  const [trailers, setTrailers] = useState<Trailer[]>([])
  const [recommendations, setRecommendations] = useState<FilmInterface[]>([])

  const fetch = async () => {
    setFilm(await getDetail(props.mediaType, parseInt(id as string)))

    const arrs: any[] = []

    for (let i = 0; i < 20; i++) {
      arrs.push({})
    }

    setCasts(arrs)
    setTrailers(arrs)
    setRecommendations(arrs)
  }

  useEffect(() => {
    fetch()
  }, [])

  if (!film) {
    return <div>404</div>
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
            {film.genreIds.map((genre, i) => (
              <li
                className="px-3 py-1.5 border-primary rounded-lg text-sm "
                key={i}
              >
                item {i}
              </li>
            ))}
          </ul>
          <p className="text-xl line-clamp-3 opacity-[0.5]">
            {film.description}
          </p>
        </div>
      </Section>
      {/* cast */}
      <Section title="Casts">
        <div className="scrollbar scrollbar-thumb-primary scrollbar-track-header">
          <div className="flex items-center gap-3">
            {casts.map((cast, i) => (
              <div className="flex-shrink-0 w-[200px] mb-6" key={i}>
                <Card imageSrc="" title="lorem ipsum" key={i}></Card>
              </div>
            ))}
          </div>
        </div>
      </Section>
      {/* trailers */}
      <Section title="Trailers">
        <div className="scrollbar scrollbar-thumb-primary scrollbar-track-header">
          <div className="flex items-center gap-3 h-[300px]">
            {casts.map((cast, i) => (
              <div className="flex-shrink-0 w-[300px] my-3">
                <Card imageSrc="" title="lorem ipsum" key={i}></Card>
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
                title={`Season ${season.seasonNumber}`}
                imageSrc=""
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
