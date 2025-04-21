import { Container, Nav, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>TS AMAZONA</Navbar.Brand>
      </Container>
      <Nav>
        <a href="/cart" className="nav-link">
          Cart
        </a>
        <a href="/signin" className="nav-link">
          Sign In
        </a>
      </Nav>
    </Navbar>
  )
}

export default Header
