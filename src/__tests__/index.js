import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import App from '../App'

it('test search form could be used', async () => {
  render(<App />)
  const input = await screen.findByRole('textbox')
  const button = await screen.findByRole('button')

  fireEvent.change(input, { target: { value: 'avengers' } })
  fireEvent.click(button)

  const title = await screen.findByText('avengers')
  expect(title).toBeVisible()
})
