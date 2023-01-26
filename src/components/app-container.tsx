import { BrowserRouter } from 'react-router-dom'

//layout
import { Header } from '../leyouts/Header'
import { Body } from '../leyouts/Body'
import { Footer } from '../leyouts/Footer'

export const AppContainer = () => {
  return (
    <BrowserRouter>
      {/* header */}
      <Header />
      {/* body */}
      <Body />
      {/* footer */}
      <Footer />
    </BrowserRouter>
  )
}
