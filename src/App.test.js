import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the WORD MASTER title', () => {
  render(<App />)
  const title = screen.getByText(/WORD MASTER/i)
  const subtitle = screen.getByText(/WORD MASTER1/i)
  expect(title).toBeInTheDocument()
  expect(subtitle).toBeInTheDocument()
})
