import Navbar from './components/Navbar'
import Slideshow from './components/Slideshow'
import MediaCard from './components/Mediacard'
import Footerv1 from './components/Footerv1'
import './App.css'
import Grid from '@mui/material/Unstable_Grid2'
import Studybtn from './components/Studybtn'
import Firstpage from './components/Firstpage'
import Cardfromapi from './components/Cardfromapi'

function App() {


  return (
    <Grid container>

      <Grid xs={12}>
        {/* <Firstpage/> */}
        <Navbar />
      </Grid>

      <Grid xs={12} sx={{ marginTop: '6rem' }} spacing={0} >
        {/* <Slideshow /> */}
        <MediaCard />
        {/* <Cardfromapi/> */}
      </Grid>

      <Grid xs={12} sx={{ marginTop: '2rem',marginBottom: '0' }}>
        <Footerv1 />
      </Grid>

    </Grid>

    // <div className='container'>

    //   <Navbar /> 

    //     <div className='Slideshow'>
    //       <Slideshow />
    //     </div>

    //     <MediaCard />

    //     <Footerv1 />

    // </div>
  )
}

export default App
