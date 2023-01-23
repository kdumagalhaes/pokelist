import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header/Header'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
