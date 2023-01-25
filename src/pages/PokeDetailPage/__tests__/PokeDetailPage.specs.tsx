import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { PokeDetailPage } from '../PokeDetailPage'
import { PokeProvider } from '../../../context/PokeContext'

describe('PokeDetailPage', () => {
  it('initial component should match snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <PokeProvider>
          <PokeDetailPage />
        </PokeProvider>
      </BrowserRouter>,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
