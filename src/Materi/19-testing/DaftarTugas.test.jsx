import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DaftarTugas from './DaftarTugas'

describe('DaftarTugas (integrasi: form + daftar)', () => {
  it('menampilkan pesan kosong saat belum ada tugas', () => {
    render(<DaftarTugas />)
    expect(screen.getByText('Belum ada tugas.')).toBeInTheDocument()
  })

  it('menambah tugas lewat form dan menampilkannya di daftar', async () => {
    const user = userEvent.setup()
    render(<DaftarTugas />)

    await user.type(screen.getByLabelText(/tugas baru/i), 'Belajar Jest')
    await user.click(screen.getByRole('button', { name: /tambah/i }))

    expect(screen.getByText('Belajar Jest')).toBeInTheDocument()
    expect(screen.getByText('1 tugas')).toBeInTheDocument()
    expect(screen.queryByText('Belum ada tugas.')).not.toBeInTheDocument()
  })

  it('menghapus tugas dari daftar', async () => {
    const user = userEvent.setup()
    render(<DaftarTugas awal={[{ id: 100, teks: 'Tugas lama' }]} />)

    await user.click(screen.getByRole('button', { name: 'Hapus Tugas lama' }))

    expect(screen.queryByText('Tugas lama')).not.toBeInTheDocument()
    expect(screen.getByText('Belum ada tugas.')).toBeInTheDocument()
  })
})
