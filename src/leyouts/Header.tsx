import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container } from '../components/container'

const MENU_CLASS = `
  px-3
  py-1.5
  hover:bg-primary
`

const MENU_CLASS_ACTIVE = `
  bg-primary
`

export const Header = () => {
  const location = useLocation()
  const [pathname, setPathname] = useState()

  useEffect(() => {}, [location.pathname])

  return (
    <div className="bg-header">
      <Container className="flex justify-between">
        {/* brand and menu */}
        <div className="flex items-center gap-6">
          <h1 className="text-2xl">
            <Link to={'/'}>My Movie App</Link>
          </h1>
          <div className="flex items-center gap-1.5">
            <Link to={'/movies'}>Movies</Link>
            <Link to={'/tv'}>TV</Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
