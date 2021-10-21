import { Icon } from '@iconify/react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const ContactButton = styled(Button)({
    backgroundColor: '#0988d6',
    borderRadius: '20px',
    padding: '22px',
    fontSize: '18px',
    fontFamily: ['Plus Jakarta Display', 'sans-serif'],
    fontWeight: 700,
    marginTop: '20px'

})

const BarButton = styled(Button)({
    backgroundColor: '#7051ef',
    padding: '10px'
})

const MenuButton = ({mediaQuery}) => {

    if (mediaQuery) {
      return (
        <ContactButton variant="contained">contact</ContactButton>
      )
    }
    else 
      return (
        <BarButton variant="contained">
            <Icon icon="ci:menu-alt-05" width="30" />
        </BarButton>
  
      )
  }

  export default MenuButton