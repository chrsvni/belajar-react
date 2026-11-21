import { useEffect, useRef } from 'react'
import Typography from '@mui/material/Typography'

export default function JumlahRender() {
  const hitungRef = useRef(0)
  const teksRef = useRef(null)

  useEffect(() => {
    hitungRef.current += 1
    teksRef.current.textContent = hitungRef.current
  })

  return (
    <Typography variant="caption" color="text.secondary">
      Digambar: <strong ref={teksRef}>0</strong> kali
    </Typography>
  )
}
