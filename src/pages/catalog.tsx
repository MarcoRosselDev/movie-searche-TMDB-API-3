import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Card } from '../components/card'
import { Image } from '../components/image'
import { Section } from '../components/section'
import { Film } from '../interfaces'
import { MediaType } from '../types'

interface Props {
  type: MediaType | 'search'
}

export const Catalog = (props: Props) => {
  let title = ''
  //
  const [films, setFilms] = useState<Film[]>([])
  const [params, _] = useSearchParams()

  //
  switch (props.type) {
    case 'movie':
      title = 'Movies'
      break

    case 'tv':
      title = 'TV'
      break

    case 'search':
      title = `Search results for <i>${params.get('q')}</i>`
      break

    default:
      break
  }

  const fetch = () => {
    const arrs: any[] = []

    for (let i = 0; i < 20; i++) {
      arrs.push({
        title: 'lorems ipsum ...',
      })
    }
    setFilms(arrs)
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
      {/* poster and text */}
      <Section
        className="-mt-[150px] flex items-center relative z-10 mobile:block"
        title="PAGE TITLE"
      >
        <div className="grid grid-cols-4">
          {films.map((film, i) => (
            <Card imageSrc="" title={film.title} key={i}></Card>
          ))}
        </div>
      </Section>
    </>
  )
}
