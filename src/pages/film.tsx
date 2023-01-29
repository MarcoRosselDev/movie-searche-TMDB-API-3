import { useParams } from 'react-router-dom'
import { Image } from '../components/image'
import { Section } from '../components/section'
import { MediaType } from '../types'

interface Props {
  mediaType: MediaType
}

export const Film = (props: Props) => {
  //
  const { params } = useParams()

  return (
    <>
      {/* background */}
      <div className="h-[300px] absolute  left-0  right-0 top-0">
        <Image src=""></Image>
      </div>
      <Section className="-mt-[150px] flex items-start relative z-10">
        <Image src="" className="w-[92px] m-w-[92px] h-[192px]  "></Image>
      </Section>
    </>
  )
}
