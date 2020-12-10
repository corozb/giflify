import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

it('test if render without crashing', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/Last Search/i)
  expect(linkElement).toBeInTheDocument()
})
