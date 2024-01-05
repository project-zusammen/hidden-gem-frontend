import { Container, Grid, ThemeProvider } from '@mui/material'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'
import theme from './styles/Theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
      <Navbar />
      <Container maxWidth={false}  style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Grid container justifyContent="center">
          <Grid item xs={4}>
            <div style={{ backgroundColor: '#f0f0f0', height: '100vh' }}>
              Left Column
            </div>
          </Grid>

          <Grid item xs={4}>
            <div style={{ backgroundColor: '#e0e0e0', height: '100vh' }}>
              <Card />
              {/* <Card />
              <Card /> */}
            </div>
          </Grid>

          <Grid item xs={4}>
            <div style={{ backgroundColor: '#d0d0d0', height: '100vh' }}>
              Right Column
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
    </ThemeProvider>
    
  )
}

export default App
