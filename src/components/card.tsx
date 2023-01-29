import { Film } from '../interfaces'
import { Image } from './image'

interface Props {
  film: Film
}

export const Card = (props: Props) => {
  return (
    <div className="mx-3 my-1.5">
      <Image src="" className="h-[200px]"></Image>
      <p className="py-1.5">{props.film.title}</p>
    </div>
  )
}
