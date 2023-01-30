import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Image } from '../components/image'
import { Section } from '../components/section'
import { MediaType } from '../types'
import { Cast, Film as FilmInterface } from '../interfaces'

interface Props {
  mediaType: MediaType
}

export const Film = (props: Props) => {
  //
  const { params } = useParams()
  //
  const [film, setFilm] = useState<FilmInterface>({
    id: 0,
    coverPath: '',
    title: 'random title',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi nemo repellendus quo corporis earum laudantium necessitatibus maxime culpa a! Aspernatur eos nam ex repudiandae provident, sed nulla fugit necessitatibus esse.',
    genreIds: [1, 2, 3, 4],
    mediaType: props.mediaType,
    posterPath: '',
    seasons: [],
  })

  const [casts, setCasts] = useState<Cast[]>([])

  const fetch = () => {
    const arrs: any[] = []

    for (let i = 0; i < 20; i++) {
      arrs.push({})
    }

    setCasts(arrs)
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
      <Section className="-mt-[150px] flex items-center relative z-10 mobile:block">
        <Image
          src=""
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
      {/* trailers */}
      {/* seasons */}
      {/* recommendations */}
    </>
  )
}