import { useEffect, useState } from 'react'
import { Container } from './container'

import { IoIosClose } from 'react-icons/io'

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
            duration-300
            fixed
            z-[1080] 
            top-0 
            bottom-0 
            left-0 
            right-0
            after:fixed
            after:content-['']
            after:top-0
            after:bottom-0
            after:left-0
            after:right-0
            after:bg-black
            after:opacity-[0.9]
      "
    >
      <Container
        className="
          relative 
          z-10
          transition-[margin,opacity]
          ease-in-out
          duration-300"
      >
        <div onClick={(e) => e.stopPropagation()}>
          <div className="p-3 text-right">
            <button onClick={() => setShow(false)}>
              <IoIosClose size={18}></IoIosClose>
            </button>
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
