import { useEffect, useState } from 'react'
import { Container } from './container'

interface Props {
  src: string | null
}

export const TrailerModal = (props: Props) => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (props.src) setShow(true)
  }, [props.src])
  return (
    <div
      onClick={() => setShow(false)}
      className="
      fixed 
      z-[1080]
      top-0 
      bottom-0
      left-0 
      right-0 
      after:fixed 
      after:container-[''] 
      after:h-full 
      after:w-full 
      after:bg-black
      after:opacity-[0.9]
      "
    >
      <Container className="bg-header rounded-sm my-12">
        <div onClick={(e) => e.stopPropagation()}>
          <div className="p-3 text-right">
            <button onClick={() => setShow(false)}>{/* icons last */}</button>
          </div>
          <iframe
            src={props.src as string}
            className="w-[500px] h-[500px]"
          ></iframe>
        </div>
      </Container>
    </div>
  )
}
