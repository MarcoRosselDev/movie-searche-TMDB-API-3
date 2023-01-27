import { Routes, Route } from 'react-router-dom'
import { Catalog } from '../pages/catalog'
import { Home } from '../pages/home'

export const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movies" element={<Catalog type="movie" />}></Route>
      <Route path="/tv" element={<Catalog type="tv" />}></Route>
    </Routes>
  )
}
