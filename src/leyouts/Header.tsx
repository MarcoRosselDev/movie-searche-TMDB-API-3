import { Link } from 'react-router-dom'
import { Container } from '../components/container'

export const Header = () => {
  return (
    <div className="bg-header">
      <Container className="flex justify-between">
        {/* brand and menu */}
        <div className="flex items-center gap-6">
          <h1>
            <Link to={'/'}>My Movie App</Link>
          </h1>
        </div>
      </Container>
    </div>
  )
}
