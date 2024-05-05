import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the Travel MASTER title', () => {
  render(<App />)
  const title = screen.getByText(/Travel MASTER/i)
  const subtitle = screen.getByText(/Travel MASTER1/i)
  expect(title).toBeInTheDocument()
  expect(subtitle).toBeInTheDocument()
})
