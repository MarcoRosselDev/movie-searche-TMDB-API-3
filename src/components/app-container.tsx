import { BrowserRouter } from 'react-router-dom'

//layout
import { Header } from '../leyouts/Header'
import { Body } from '../leyouts/Body'
import { Footer } from '../leyouts/Footer'
import { Genre } from '../interfaces'
import { MediaType } from '../types'
import { useContext, createContext, useState } from 'react'
import { Loading } from './loading'

type Genres = {
  [key in MediaType]: Genre[]
}

const GlobalContext = createContext<{
  genres: Genres
}>({
  genres: {
    movie: [],
    tv: [],
  },
})

export const useGlobalContext = () => useContext(GlobalContext)

export const AppContainer = () => {
  const [genres, setGenres] = useState<Genres>({
    movie: [],
    tv: [],
  })

  if (!genres.movie.length || !genres.movie.length) {
    return (
      <div className="fixed left-0 top-0 right-0 bottom-0 flex items-center justify-center">
        <Loading></Loading>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <div className="pb-[64px]">
        <GlobalContext.Provider value={{ genres }}>
          {/* header */}
          <Header />
          {/* body */}
          <Body />
          {/* footer */}
          <Footer />
        </GlobalContext.Provider>
      </div>
    </BrowserRouter>
  )
}
