import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Link from './Link'

it('mengubah class saat di-hover', async () => {
  const user = userEvent.setup()
  const { asFragment } = render(
    <Link page="http://www.facebook.com">Facebook</Link>
  )
  const link = screen.getByRole('link', { name: 'Facebook' })

  expect(link).toHaveClass('normal')
  expect(asFragment()).toMatchSnapshot()

  await user.hover(link)
  expect(link).toHaveClass('hovered')
  expect(asFragment()).toMatchSnapshot()

  await user.unhover(link)
  expect(link).toHaveClass('normal')
})
