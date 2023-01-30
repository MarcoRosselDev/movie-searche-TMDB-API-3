import { useState } from 'react'
import { Film } from '../interfaces'

export const Episodes = () => {
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
  return <div>episodes</div>
}
