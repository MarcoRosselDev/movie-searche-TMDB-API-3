import { useState } from 'react'
import { Container } from './container'

export const TrialetModal = () => {
  const [show, setShow] = useState(false)
  return (
    <div
      onClick={() => setShow(false)}
      className="
      hidden
      fixed 
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
        <div onClick={(e) => e.stopPropagation()}></div>
      </Container>
    </div>
  )
}
