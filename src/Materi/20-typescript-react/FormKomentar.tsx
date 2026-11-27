import { useState } from 'react'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Alert from '@mui/material/Alert'

interface DataKomentar {
  penulis: string
  pesan: string
  kategori: 'Tanya' | 'Saran' | 'Apresiasi'
}

interface FormKomentarProps {
  onKirim: (data: DataKomentar) => void
}

export default function FormKomentar({ onKirim }: FormKomentarProps) {
  const [form, setForm] = useState<DataKomentar>({
    penulis: '',
    pesan: '',
    kategori: 'Tanya',
  })
  const [sukses, setSukses] = useState(false)

  function handleChangeTeks(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!form.penulis.trim() || !form.pesan.trim()) return

    onKirim(form)
    setSukses(true)
    setForm({ penulis: '', pesan: '', kategori: 'Tanya' })

    setTimeout(() => setSukses(false), 3000)
  }

  return (
    <Stack component="form" onSubmit={handleSubmit} spacing={2}>
      {sukses && (
        <Alert severity="success" onClose={() => setSukses(false)}>
          Komentar berhasil dikirim dengan tipe data yang valid!
        </Alert>
      )}

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <TextField
          size="small"
          label="Nama Penulis"
          name="penulis"
          value={form.penulis}
          onChange={handleChangeTeks}
          required
          fullWidth
        />
        <TextField
          size="small"
          select
          label="Kategori"
          name="kategori"
          value={form.kategori}
          onChange={handleChangeTeks}
          sx={{ minWidth: 160 }}
        >
          <MenuItem value="Tanya">Tanya</MenuItem>
          <MenuItem value="Saran">Saran</MenuItem>
          <MenuItem value="Apresiasi">Apresiasi</MenuItem>
        </TextField>
      </Stack>

      <TextField
        size="small"
        label="Isi Komentar"
        name="pesan"
        multiline
        rows={3}
        value={form.pesan}
        onChange={handleChangeTeks}
        required
        fullWidth
      />

      <Button
        type="submit"
        variant="contained"
        sx={{ alignSelf: 'flex-start' }}
      >
        Kirim Komentar
      </Button>
    </Stack>
  )
}
