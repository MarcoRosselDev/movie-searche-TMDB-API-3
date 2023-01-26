import { CustomComponentProps } from '../interfaces'
import { mergeClassName } from '../utils'

export const Container = (props: CustomComponentProps) => {
  return <div className={mergeClassName('')}></div>
}
