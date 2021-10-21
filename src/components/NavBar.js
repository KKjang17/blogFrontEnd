import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const MenuLink = styled(Button)({
    textTransform: 'none',
    fontFamily: [ 'Plus Jakarta Display', 'sans-serif' ],
    fontWeight: 500,
    fontSize: '18px',
    padding: '19px',
    borderRadius: '14px',
    marginRight: '2px'
  
})

const NavBar = () => {
    
    return (
      <div>
        <Link to="/"><MenuLink variant="text">about me</MenuLink></Link>
        <Link to="my-writing"><MenuLink variant="text">my writing</MenuLink></Link>
        <Link to="courses"><MenuLink variant="text">courses</MenuLink></Link>
      </div>
    )
  }

export default NavBar