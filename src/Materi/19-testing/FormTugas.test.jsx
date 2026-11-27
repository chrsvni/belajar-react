import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormTugas from './FormTugas'

describe('FormTugas', () => {
  it('memanggil onTambah dengan teks yang diketik, lalu mengosongkan kolom', async () => {
    const user = userEvent.setup()
    const handleTambah = jest.fn() // fungsi tiruan untuk memata-matai pemanggilan
    render(<FormTugas onTambah={handleTambah} />)

    await user.type(screen.getByLabelText(/tugas baru/i), 'Belajar testing')
    await user.click(screen.getByRole('button', { name: /tambah/i }))

    expect(handleTambah).toHaveBeenCalledTimes(1)
    expect(handleTambah).toHaveBeenCalledWith('Belajar testing')
    expect(screen.getByLabelText(/tugas baru/i)).toHaveValue('')
  })

  it('tidak memanggil onTambah kalau kolom kosong', async () => {
    const user = userEvent.setup()
    const handleTambah = jest.fn()
    render(<FormTugas onTambah={handleTambah} />)

    await user.click(screen.getByRole('button', { name: /tambah/i }))

    expect(handleTambah).not.toHaveBeenCalled()
  })
})
