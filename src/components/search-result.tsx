import { useState } from 'react'
import { Film } from '../interfaces'
import { Image } from './image'

interface Props {
  keyword: string
  goToSearchPage: Function
}

export const SearchResult = () => {
  const [items, setItems] = useState<Film[]>([])
  //

  const fetch = () => {
    const arrs: Film[] = []
    for (let i = 0; i < 5; i++) {
      arrs.push({
        id: i,
        title: '',
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
        <div className="flex items-start p-1.5 rounded-lg hover:bg-primary cursor-pointer">
          {/* image */}
          <Image src="" className="h-[72px] w-[102px]"></Image>
          {/* title and genres */}
        </div>
      ))}
    </div>
  )
}
