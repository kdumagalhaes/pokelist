import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Pagination } from '../Pagination'

describe('Pagination', () => {
  it('initial component should match snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Pagination />
      </BrowserRouter>,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render previous button', () => {
    render(
      <BrowserRouter>
        <Pagination />
      </BrowserRouter>,
    )
    const previousButton = screen.getByRole('button', { name: /previous/i })
    expect(previousButton).toBeVisible()
  })

  it('should render next button', () => {
    render(
      <BrowserRouter>
        <Pagination />
      </BrowserRouter>,
    )
    const previousButton = screen.getByRole('button', { name: /next/i })
    expect(previousButton).toBeVisible()
  })
})
