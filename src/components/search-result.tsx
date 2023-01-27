import { useState } from 'react'

interface Props {
  keyword: string
  goToSearchPage: Function
}

export const SearchResult = () => {
  const [items, setItems] = useState('')
  //
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
    ></div>
  )
}
