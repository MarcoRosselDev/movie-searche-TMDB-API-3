import { useEffect, useState } from 'react'
import { Image } from '../components/image'
import { Section } from '../components/section'
import { Film } from '../interfaces'

export const Season = () => {
  //
  const [film, setFilm] = useState<Film>({
    id: 0,
    coverPath: '',
    title: 'random title',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi nemo repellendus quo corporis earum laudantium necessitatibus maxime culpa a! Aspernatur eos nam ex repudiandae provident, sed nulla fugit necessitatibus esse.',
    genreIds: [1, 2, 3, 4],
    mediaType: 'tv',
    posterPath: '',
    seasons: [
      {
        id: 1,
        seasonNumber: 1,
      },
      {
        id: 2,
        seasonNumber: 2,
      },
      {
        id: 3,
        seasonNumber: 3,
      },
    ],
  })

  //
  const [episodes, setEpisodes] = useState<any[]>()
  //
  const fetch = () => {
    const arrs: any[] = []
    for (let i = 0; i < 12; i++) {
      arrs.push({})
    }

    setEpisodes(arrs)
  }
  //
  useEffect(() => {
    fetch()
  }, [])

  return (
    <>
      {/* background */}
      <div className="h-[150px] left-0 right-0 top-0 relative">
        <div className="overlay-film-cover"></div>
      </div>
      {/* poster and text */}
      <Section className="-mt-[75px] flex items-center relative z-10 mobile:block">
        <Image
          src=""
          className="w-[200px] min-w-[200px] h-[300px] mobile:mx-auto"
        ></Image>
        <div className="px-3 flex flex-col items-start gap-3">
          <p className="text-xl line-clamp-1">{film.title}</p>
          <p className="line-clamp-3 opacity-[0.9]">Season 1 | 12 episodes</p>
        </div>
      </Section>
    </>
  )
}
