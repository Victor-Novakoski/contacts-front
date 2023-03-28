import { Container } from './style'
import { ToastContainer } from 'react-toastify'
import Router from './router'
import Providers from './providers/Providers'

function App() {
  return (
    <Providers>
      <Container>
        <ToastContainer
          position="bottom-right"
          autoClose={1500}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
          toastStyle={{ backgroundColor: 'black', color: 'white' }}
        />
        <Router />
      </Container>
    </Providers>
  )
}

export default App
