import { useParams } from 'react-router-dom'
import { MediaType } from '../types'

interface Props {
  mediaType: MediaType
}

export const Film = (props: Props) => {
  //
  const { params } = useParams()

  return <div>film</div>
}
