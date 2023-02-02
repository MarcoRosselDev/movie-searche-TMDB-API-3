import { useState, useEffect, useRef } from 'react'
import { search } from '../api/tmdb-api'
import { Film } from '../interfaces'
import { tmdbImageSrc } from '../utils'
import { Image } from './image'

interface Props {
  keyword: string
  goToSearchPage: Function
}

export const SearchResult = (props: Props) => {
  const [items, setItems] = useState<Film[]>([])

  const [totalItem, setTotalItem] = useState(6)
  //

  const searchTimeout = useRef<any>(0)
  //
  const fetch = async () => {
    clearTimeout(searchTimeout.current)
    searchTimeout.current = setTimeout(async () => {
      const res = await search(props.keyword)
      setTotalItem(res.totalResults)
      setItems(res.films)
    }, 120)
  }

  useEffect(() => {
    fetch()
  }, [props.keyword])

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
          className="flex items-start p-1.5 rounded-lg hover:bg-primary cursor-pointer m-1.5"
        >
          {/* image */}
          <Image
            src={tmdbImageSrc(film.posterPath)}
            className="h-[72px] w-[102px] rounded-md"
          ></Image>
          {/* title and genres */}
          <div className="px-3">
            <p className="text-base truncate">{film.title}</p>
            <ul className="flex flex-wrap gap-x-1.5 text-sm opacity-[0.7]">
              {film.genreIds.map((id, i) => (
                <li key={i}>item {i}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      {totalItem > 5 ? (
        <button
          className="p-3 py-1.5 bg-primary w-full hover:text-body"
          onClick={() => props.goToSearchPage()}
        >
          More Results
        </button>
      ) : (
        ''
      )}
    </div>
  )
}
