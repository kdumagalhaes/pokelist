import { ThemeProvider } from 'styled-components'
import { PokeProvider } from './context/PokeContext'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PokeProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PokeProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
