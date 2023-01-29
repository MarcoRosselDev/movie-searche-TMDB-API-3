import { BrowserRouter } from 'react-router-dom'

//layout
import { Header } from '../leyouts/Header'
import { Body } from '../leyouts/Body'
import { Footer } from '../leyouts/Footer'

export const AppContainer = () => {
  return (
    <div className="pb-[64px]">
      <BrowserRouter>
        {/* header */}
        <Header />
        {/* body */}
        <Body />
        {/* footer */}
        <Footer />
      </BrowserRouter>
    </div>
  )
}
