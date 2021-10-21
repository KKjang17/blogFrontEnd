import { useState, useEffect} from 'react'
import Grid from '@mui/material/Grid'
import profileImage from '../images/sonoraPic.jpg'

import EditIntroForm from '../components/EditIntroForm'

const AboutMe = () => {

    //admin
    const [adminMode, setAdminMode] = useState(false)

    const [introData, setIntroData] = useState("")
    const [loaded, setLoaded] = useState(false)

    const getIntroData = async () => {
        try {
        const response = await fetch('https://blog-express-server.herokuapp.com/')
        const jsonData = await response.json()

        setIntroData(jsonData)
        setLoaded(true)
        }
        catch (err) {
        console.error(err.message)
        }
    }

    useEffect(() => {
        getIntroData()
    }, [])

    const displayIntro = () => {

        return (
        <div>
            {introData.blurb}
        </div>
        )
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <button onClick={() => {setAdminMode(!adminMode)}}>admin</button>
            </Grid>

            <Grid item xs={4}>
                {loaded && displayIntro()}
                <EditIntroForm adminMode={adminMode}/>
            </Grid>

            <Grid item xs={5}>
                <img src={profileImage} alt="Hi, I'm Sonora"/>
            </Grid>

            <Grid item xs={1}>

            </Grid>
        </Grid>
    )
}

export default AboutMe