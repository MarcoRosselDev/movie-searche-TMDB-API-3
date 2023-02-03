import { CustomComponentProps } from '../interfaces'
import { Image } from './image'

interface Props extends CustomComponentProps {
  imageSrc: string
  title?: string
  onClick?: Function
}

export const Card = (props: Props) => {
  return (
    <div
      onClick={() => (props.onClick ? props.onClick() : '')}
      className="mx-3 my-1.5 cursor-pointer"
    >
      <Image
        src={props.imageSrc}
        className="min-h-[240px] h-[200px] rounded-lg"
      ></Image>
      <p className="py-1.5 line-clamp-2">{props.title}</p>
      {props.children}
    </div>
  )
}
