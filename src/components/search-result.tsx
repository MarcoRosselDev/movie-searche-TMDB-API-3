import { useState } from 'react'
import { Film } from '../interfaces'
import { Image } from './image'

interface Props {
  keyword: string
  goToSearchPage: Function
}

export const SearchResult = (props: Props) => {
  const [items, setItems] = useState<Film[]>([])
  //

  const fetch = () => {
    const arrs: Film[] = []
    for (let i = 0; i < 5; i++) {
      arrs.push({
        id: i,
        title: 'lorem',
        description: '',
        coverPath: '',
        genreIds: [],
        posterPath: '',
        seasons: [],
      })
    }
    setItems(arrs)
  }
  return (
    <div
      className="
    absolute
    top-[48px]
    left-0
    right-0
    rounded-md
    overflow-hidden
    "
    >
      {items.map((film, i) => (
        <div
          key={i}
          className="flex items-start p-1.5 rounded-lg hover:bg-primary cursor-pointer"
        >
          {/* image */}
          <Image src="" className="h-[72px] w-[102px]"></Image>
          {/* title and genres */}
          <div className="px-3">
            <p className="text-base">{film.title}</p>
            <ul className="flex flex-wrap gap-x-1.5 text-sm">
              {film.genreIds.map((id, i) => (
                <li key={i}>item {i}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
