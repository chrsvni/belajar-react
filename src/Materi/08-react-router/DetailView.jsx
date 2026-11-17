import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';

export default function DetailView() {
  const { slug } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const refSumber = searchParams.get('ref') || 'Langsung dari Navbar';
  const tabAktif = searchParams.get('tab') || 'ringkasan';

  const navigate = useNavigate();

  const handleChangeTab = (namaTab) => {
    searchParams.set('tab', namaTab);
    setSearchParams(searchParams);
  };

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          📄 Halaman Detail Topik
        </Typography>

        <Box sx={{ my: 2, p: 2, bgcolor: 'background.default', borderRadius: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">
            Nilai dari <code>useParams()</code>:
          </Typography>
          <Typography variant="h6" sx={{ color: '#6366f1', mb: 1 }}>
            slug = "{slug}"
          </Typography>

          <Typography variant="subtitle2" color="text.secondary">
            Nilai dari <code>useSearchParams()</code>:
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
            <Chip label={`ref: ${refSumber}`} size="small" />
            <Chip label={`tab: ${tabAktif}`} size="small" color="secondary" />
          </Stack>
        </Box>

        <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 3, mb: 1 }}>
          Ubah Query Parameter (?tab=...):
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
          <Button
            size="small"
            variant={tabAktif === 'ringkasan' ? 'contained' : 'outlined'}
            onClick={() => handleChangeTab('ringkasan')}
          >
            Tab Ringkasan
          </Button>
          <Button
            size="small"
            variant={tabAktif === 'diskusi' ? 'contained' : 'outlined'}
            onClick={() => handleChangeTab('diskusi')}
          >
            Tab Diskusi
          </Button>
        </Stack>

        <Button variant="text" onClick={() => navigate(-1)}>
          ← Kembali ke Halaman Sebelumnya (navigate(-1))
        </Button>
      </CardContent>
    </Card>
  );
}