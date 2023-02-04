import { CustomComponentProps } from '../interfaces'
import { mergeClassName } from '../utils'
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
      className={mergeClassName(
        'group mx-3 my-1.5 cursor-pointer',
        props.className
      )}
    >
      <div>
        <Image src={props.imageSrc}></Image>
      </div>
      <p className="py-1.5 line-clamp-2">{props.title}</p>
      {props.children}
    </div>
  )
}
