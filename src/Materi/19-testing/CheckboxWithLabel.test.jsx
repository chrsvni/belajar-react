import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CheckboxWithLabel from './CheckboxWithLabel'

it('mengganti label saat checkbox diklik', async () => {
  const user = userEvent.setup()
  render(<CheckboxWithLabel labelOn="Aktif" labelOff="Nonaktif" />)

  const checkbox = screen.getByRole('checkbox', { name: /nonaktif/i })
  expect(checkbox).not.toBeChecked()

  await user.click(checkbox)

  expect(screen.getByRole('checkbox', { name: /^aktif$/i })).toBeChecked()
  expect(screen.queryByText('Nonaktif')).not.toBeInTheDocument()
})
