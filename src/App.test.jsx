import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the portfolio hero and experience sections', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /hi, i[’']m adwaith c/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument()
  })
})
