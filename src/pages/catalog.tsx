import { useState } from 'react'
import { Image } from '../components/image'
import { Section } from '../components/section'
import { Film } from '../interfaces'
import { MediaType } from '../types'

interface Props {
  type: MediaType | 'search'
}

export const Catalog = (props: Props) => {
  //
  const [films, setFilms] = useState<Film[]>([])
  return (
    <>
      {/* background */}
      <div className="h-[300px] left-0 right-0 top-0 relative">
        <div className="overlay-film-cover"></div>
        <Image src=""></Image>
      </div>
      {/* poster and text */}
      <Section
        className="-mt-[150px] flex items-center relative z-10 mobile:block"
        title="PAGE TITLE"
      ></Section>
    </>
  )
}
