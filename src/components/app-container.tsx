import { BrowserRouter } from 'react-router-dom'

//layout
import { Header } from '../leyouts/Header'
import { Body } from '../leyouts/Body'
import { Footer } from '../leyouts/Footer'
import { Genre } from '../interfaces'
import { MediaType } from '../types'
import { useContext, createContext } from 'react'

type Genres = {
  [key in MediaType]: Genre[]
}

const GlobalContext = createContext<{
  genres: Genres
}>({
  genres: {
    movie: [],
    tv: [],
  } satisfies Genres,
})

export const useGlobalContext = () => useContext(GlobalContext)

export const AppContainer = () => {
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
