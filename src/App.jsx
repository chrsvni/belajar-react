import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Stack from '@mui/material/Stack'

// Icons
import LayersIcon from '@mui/icons-material/Layers'
import TuneIcon from '@mui/icons-material/Tune'
import TouchAppIcon from '@mui/icons-material/TouchApp'
import AltRouteIcon from '@mui/icons-material/AltRoute'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import DynamicFormIcon from '@mui/icons-material/DynamicForm'
import CodeIcon from '@mui/icons-material/Code'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import SyncIcon from '@mui/icons-material/Sync'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import FunctionsIcon from '@mui/icons-material/Functions'
import SpeedIcon from '@mui/icons-material/Speed'

import { darkTheme } from './theme'
import Materi01 from './Materi/01-komponen-dan-props'
import Materi02 from './Materi/02-state-dan-props'
import Materi03 from './Materi/03-event-handling'
import Materi04 from './Materi/04-lifecycle-dan-effect'
import Materi05 from './Materi/05-conditional-rendering'
import Materi06 from './Materi/06-rendering-lists'
import Materi07 from './Materi/07-forms'
import Materi08 from './Materi/08-react-router'
import Materi09 from './Materi/09-context'
import Materi10 from './Materi/10-reducer'
import Materi11 from './Materi/11-use-callback'

const daftarMateri = [
  {
    id: '01',
    nama: '01 Komponen & Props',
    judul: 'Komponen & Props',
    deskripsi:
      'Fondasi utama React: membuat komponen dengan Function & Class, serta memahami aliran data satu arah melalui props.',
    tags: ['Dasar', 'Props', 'JSX'],
    icon: <LayersIcon fontSize="medium" />,
    color: '#6366f1',
    component: Materi01,
  },
  {
    id: '02',
    nama: '02 State & Props',
    judul: 'State & Props',
    deskripsi:
      'Menjadikan komponen interaktif dengan useState: mengelola angka, objek form, dan komunikasi antar komponen lewat Todo App.',
    tags: ['useState', 'Interaktif', 'TodoApp'],
    icon: <TuneIcon fontSize="medium" />,
    color: '#ec4899',
    component: Materi02,
  },
  {
    id: '03',
    nama: '03 Event Handling',
    judul: 'Event Handling',
    deskripsi:
      'Merespon aksi pengguna: onClick, event bubbling & stopPropagation, controlled input dengan onChange, dan form submit.',
    tags: ['Events', 'onClick', 'Bubbling'],
    icon: <TouchAppIcon fontSize="medium" />,
    color: '#f59e0b',
    component: Materi03,
  },
  {
    id: '04',
    nama: '04 Lifecycle & Effect',
    judul: 'Lifecycle & Effect',
    deskripsi:
      'Memahami siklus hidup Effect: useEffect, cleanup, array dependency, serta perbandingan lifecycle method class dengan hooks.',
    tags: ['useEffect', 'Cleanup', 'Dependency'],
    icon: <SyncIcon fontSize="medium" />,
    color: '#f43f5e',
    component: Materi04,
  },
  {
    id: '05',
    nama: '05 Conditional Rendering',
    judul: 'Conditional Rendering',
    deskripsi:
      'Teknik menampilkan UI bersyarat: operator ternary, logical AND (&&), null return, dan refactor percabangan if/else.',
    tags: ['Ternary', 'If/Else', 'Kondisi'],
    icon: <AltRouteIcon fontSize="medium" />,
    color: '#10b981',
    component: Materi05,
  },
  {
    id: '06',
    nama: '06 Rendering Lists',
    judul: 'Rendering Lists & Keys',
    deskripsi:
      'Transformasi array ke elemen JSX dengan map() dan filter(), serta alasan krusial mengapa key tidak boleh memakai index.',
    tags: ['map()', 'filter()', 'Key Bug'],
    icon: <FormatListBulletedIcon fontSize="medium" />,
    color: '#06b6d4',
    component: Materi06,
  },
  {
    id: '07',
    nama: '07 Forms',
    judul: 'Forms & Controlled Components',
    deskripsi:
      'Pengelolaan formulir di React: controlled components, validasi manual dengan state, dan integrasi pustaka Formik.',
    tags: ['Forms', 'Validation', 'Formik'],
    icon: <DynamicFormIcon fontSize="medium" />,
    color: '#8b5cf6',
    component: Materi07,
  },
  {
    id: '08',
    nama: '08 React Router',
    judul: 'React Router (v6+)',
    deskripsi:
      'Implementasi Client-Side Routing: BrowserRouter, Routes, Route, NavLink, Outlet, useParams, dan useNavigate.',
    tags: ['Router', 'useParams', 'useNavigate'],
    icon: <AltRouteIcon fontSize="medium" />,
    color: '#8b5cf6',
    component: Materi08,
  },
  {
    id: '09',
    nama: '09 Context',
    judul: 'Context',
    deskripsi:
      'Mengoper data ke komponen yang dalam tanpa prop drilling: createContext, useContext, dan provider, serta kapan sebaiknya tidak memakai context.',
    tags: ['Context', 'useContext', 'Prop Drilling'],
    icon: <AccountTreeIcon fontSize="medium" />,
    color: '#14b8a6',
    component: Materi09,
  },
  {
    id: '10',
    nama: '10 Reducer',
    judul: 'Reducer',
    deskripsi:
      'Memindahkan logika pembaruan state ke satu fungsi dengan useReducer: dispatch, action, dan perbandingannya dengan useState.',
    tags: ['useReducer', 'dispatch', 'Action'],
    icon: <FunctionsIcon fontSize="medium" />,
    color: '#3b82f6',
    component: Materi10,
  },
  {
    id: '11',
    nama: '11 useCallback',
    judul: 'useCallback',
    deskripsi:
      'Meng-cache definisi fungsi antar render: memo, fungsi updater, dependency Effect, dan kapan memoisasi benar-benar diperlukan.',
    tags: ['useCallback', 'memo', 'Optimasi'],
    icon: <SpeedIcon fontSize="medium" />,
    color: '#84cc16',
    component: Materi11,
  },
]

export default function App() {
  const [materiTerpilih, setMateriTerpilih] = useState(null)
  const [pencarian, setPencarian] = useState('')

  // Filter modul berdasarkan pencarian
  const modulTampil = daftarMateri.filter((m) => {
    const q = pencarian.toLowerCase()
    return (
      m.judul.toLowerCase().includes(q) ||
      m.deskripsi.toLowerCase().includes(q) ||
      m.tags.some((t) => t.toLowerCase().includes(q))
    )
  })

  const indexAktif = daftarMateri.findIndex((m) => m.id === materiTerpilih?.id)
  const materiSebelumnya = indexAktif > 0 ? daftarMateri[indexAktif - 1] : null
  const materiSelanjutnya =
    indexAktif < daftarMateri.length - 1 ? daftarMateri[indexAktif + 1] : null

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default' }}
      >
        {/* Navbar Atas yang Bersih (Bebas dari Tab Menumpuk) */}
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', py: 0.8 }}>
            <Box
              onClick={() => setMateriTerpilih(null)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                cursor: 'pointer',
              }}
            >
              <Box
                sx={{
                  bgcolor: 'rgba(99, 102, 241, 0.25)',
                  border: '1px solid rgba(99, 102, 241, 0.4)',
                  p: 0.8,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <CodeIcon sx={{ color: '#818cf8' }} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: 800, color: '#f8fafc', lineHeight: 1.2 }}
                >
                  Belajar React
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: 'rgba(255, 255, 255, 0.65)' }}
                >
                  Makers Institute • Learning Portal
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              {materiTerpilih && (
                <Button
                  variant="outlined"
                  color="inherit"
                  size="small"
                  startIcon={<HomeIcon />}
                  onClick={() => setMateriTerpilih(null)}
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: '#fff',
                  }}
                >
                  Katalog Materi
                </Button>
              )}
              <Chip
                label="React 19"
                size="small"
                sx={{
                  bgcolor: 'rgba(99, 102, 241, 0.2)',
                  color: '#818cf8',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                }}
              />
            </Box>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ py: 4 }}>
          {/* ============================================================ */}
          {/* TAMPILAN 1: HALAMAN AWAL (KATALOG CARD MATERI)               */}
          {/* ============================================================ */}
          {materiTerpilih === null ? (
            <Box>
              {/* Hero Banner Header */}
              <Box sx={{ textAlign: 'center', mb: 5, mt: 2 }}>
                <Chip
                  label="Learning Roadmap • Magang"
                  size="small"
                  color="primary"
                  sx={{ mb: 1.5, fontWeight: 700 }}
                />
                <Typography
                  variant="h4"
                  fontWeight={900}
                  gutterBottom
                  sx={{ letterSpacing: '-0.02em' }}
                >
                  Katalog Modul Belajar React
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ maxWidth: 600, mx: 'auto', mb: 3 }}
                >
                  Pilih kartu materi di bawah untuk membuka penjelasan teori,
                  studi kasus, dan latihan interaktif.
                </Typography>

                {/* Input Pencarian Modul */}
                <Box sx={{ maxWidth: 450, mx: 'auto' }}>
                  <TextField
                    placeholder="Cari modul atau topik (misal: props, form, list)..."
                    value={pencarian}
                    onChange={(e) => setPencarian(e.target.value)}
                    fullWidth
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon color="action" fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </Box>

              {/* Grid 2 Kolom untuk Kartu Materi */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                  gap: 3,
                }}
              >
                {modulTampil.map((modul) => (
                  <Card
                    key={modul.id}
                    variant="outlined"
                    sx={{
                      height: '100%',
                      minHeight: 280,
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      borderColor: 'divider',
                      transition: 'all 0.25s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        borderColor: modul.color,
                        boxShadow: `0 12px 28px -6px ${modul.color}35`,
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        p: 3,
                      }}
                    >
                      {/* Header Kartu: Ikon & Nomor Modul */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          mb: 2,
                        }}
                      >
                        <Box
                          sx={{
                            p: 1.2,
                            borderRadius: 2,
                            bgcolor: `${modul.color}20`,
                            color: modul.color,
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          {modul.icon}
                        </Box>
                        <Chip
                          label={`#${modul.id}`}
                          size="small"
                          sx={{
                            bgcolor: 'background.default',
                            fontWeight: 800,
                            borderColor: 'divider',
                          }}
                          variant="outlined"
                        />
                      </Box>

                      {/* Judul */}
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ minHeight: 32 }}
                      >
                        {modul.judul}
                      </Typography>

                      {/* Deskripsi - panjang & tinggi diseragamkan */}
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mb: 2.5,
                          lineHeight: 1.6,
                          minHeight: 44,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {modul.deskripsi}
                      </Typography>

                      {/* Tag Chips - selalu terdorong rapi di bagian bawah */}
                      <Box sx={{ mt: 'auto', pt: 1 }}>
                        <Stack
                          direction="row"
                          spacing={0.8}
                          flexWrap="wrap"
                          useFlexGap
                        >
                          {modul.tags.map((tag) => (
                            <Chip
                              key={tag}
                              label={tag}
                              size="small"
                              variant="outlined"
                              sx={{ fontSize: '0.7rem' }}
                            />
                          ))}
                        </Stack>
                      </Box>
                    </CardContent>

                    <CardActions sx={{ p: 3, pt: 0 }}>
                      <Button
                        fullWidth
                        variant="contained"
                        endIcon={<ArrowForwardIcon />}
                        onClick={() => setMateriTerpilih(modul)}
                        sx={{
                          py: 1,
                          fontWeight: 700,
                          bgcolor: `${modul.color}ee`,
                          '&:hover': { bgcolor: modul.color },
                        }}
                      >
                        Buka Materi
                      </Button>
                    </CardActions>
                  </Card>
                ))}
              </Box>

              {modulTampil.length === 0 && (
                <Box sx={{ textAlign: 'center', py: 6 }}>
                  <Typography variant="h6" color="text.secondary">
                    Tidak ada materi yang sesuai dengan kata kunci "{pencarian}
                    ".
                  </Typography>
                  <Button sx={{ mt: 1 }} onClick={() => setPencarian('')}>
                    Tampilkan Semua Modul
                  </Button>
                </Box>
              )}
            </Box>
          ) : (
            /* ============================================================ */
            /* TAMPILAN 2: DETAIL MATERI YANG DIKLIK                       */
            /* ============================================================ */
            <Box>
              {/* Bar Navigasi Kembali & Breadcrumb */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: 3,
                  flexWrap: 'wrap',
                  gap: 1.5,
                }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<ArrowBackIcon />}
                  onClick={() => setMateriTerpilih(null)}
                  sx={{ fontWeight: 'bold' }}
                >
                  Kembali ke Katalog
                </Button>

                {/* Tombol Cepat Sebelum & Sesudah */}
                <Stack direction="row" spacing={1}>
                  {materiSebelumnya && (
                    <Button
                      size="small"
                      variant="text"
                      color="inherit"
                      startIcon={<ArrowBackIcon fontSize="small" />}
                      onClick={() => setMateriTerpilih(materiSebelumnya)}
                      sx={{ color: 'text.secondary' }}
                    >
                      {materiSebelumnya.id}
                    </Button>
                  )}
                  {materiSelanjutnya && (
                    <Button
                      size="small"
                      variant="text"
                      color="inherit"
                      endIcon={<ArrowForwardIcon fontSize="small" />}
                      onClick={() => setMateriTerpilih(materiSelanjutnya)}
                      sx={{ color: 'text.secondary' }}
                    >
                      {materiSelanjutnya.id} {materiSelanjutnya.judul}
                    </Button>
                  )}
                </Stack>
              </Box>

              {/* Kontainer Isi Materi */}
              <Paper
                elevation={2}
                sx={{
                  p: { xs: 2.5, sm: 4 },
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                }}
              >
                <materiTerpilih.component />
              </Paper>
            </Box>
          )}
        </Container>
      </Box>
    </ThemeProvider>
  )
}
