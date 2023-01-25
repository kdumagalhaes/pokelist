import { render } from '@testing-library/react'
import { PokeContainer } from '../PokeContainer'
import { PokeProvider } from '../../../context/PokeContext'

describe('PokeContainer', () => {
  it('initial component should match snapshot', () => {
    const { asFragment } = render(
      <PokeProvider>
        <PokeContainer />
      </PokeProvider>,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
