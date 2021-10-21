import Grid from '@mui/material/Grid'
import useMediaQuery from '@mui/material/useMediaQuery'
import NavBar from './NavBar'
import MenuButton from './MenuButton'

const NavigationMenu = () => {
    const isScreenThousandPix = useMediaQuery('(min-width:1000px)')
  
    return(
      <Grid container spacing={2}>
        <Grid item xs={10} container>
          
          <Grid item xs={3}>
          </Grid>
  
          <Grid item xs={9}>
            <NavBar />
          </Grid>
            
        </Grid>
  
        <Grid item xs={2} container>
  
          <MenuButton mediaQuery={isScreenThousandPix} />
            
        </Grid>
      </Grid>
    )
}

export default NavigationMenu