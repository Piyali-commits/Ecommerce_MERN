import { useContext, useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import SwitchThemeContext from '../contexts/SwitchThemeContext.tsx'
import { ThemeConstants } from '../Constants.ts'
import { SwitchTheme } from '../reducers/SwitchTheme.reducer.ts'
import { Link } from 'react-router-dom'
function Header() {
  const {
    themeType: { theme },
    dispatch,
  } = useContext(SwitchThemeContext)

  useEffect(() => {
    if (!localStorage.getItem('theme')) localStorage.setItem('theme', ThemeConstants.SWITCH_MODE_LIGHT)
  }, [])

  useEffect(() => {
    if (theme) document.body.setAttribute('data-bs-theme', theme)
  }, [theme])

  const switchModeHandler = () => {
    SwitchTheme(dispatch)
  }
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>TS AMAZONA</Navbar.Brand>
      </Container>
      <Nav>
        <Link to="#" className="nav-link header-link" onClick={switchModeHandler}>
          <i className={theme === ThemeConstants.SWITCH_MODE_DARK ? 'fa fa-moon' : 'fa fa-sun'}></i>
        </Link>
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
