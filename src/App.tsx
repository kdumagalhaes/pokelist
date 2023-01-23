import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header/Header'
import { PokeContainer } from './components/PokeContainer/PokeContainer'
import { PokeProvider } from './context/PokeContext'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PokeProvider>
        <Header />
        <PokeContainer />
      </PokeProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
