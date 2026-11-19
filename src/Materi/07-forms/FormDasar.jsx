import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const awal = {
  nama: "",
  pesan: "Tulis pesanmu di sini...",
  rasa: "kelapa",
  hadir: true,
  jumlahTamu: 2,
};

export default function FormDasar() {
  const [form, setForm] = useState(awal);
  const [namaFile, setNamaFile] = useState("");
  const [hasil, setHasil] = useState(null);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setHasil({ ...form, namaFile });
  }

  function handleReset() {
    setForm(awal);
    setNamaFile("");
    setHasil(null);
  }

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardContent>
        <Stack
          component="form"
          onSubmit={handleSubmit}
          spacing={2.5}
          sx={{ maxWidth: 550 }}
        >
          {/* Input Nama */}
          <TextField
            label="Nama"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            size="small"
            fullWidth
          />

          {/* Textarea Pesan */}
          <TextField
            label="Pesan"
            name="pesan"
            value={form.pesan}
            onChange={handleChange}
            multiline
            rows={3}
            fullWidth
          />

          {/* Select Rasa Favorit */}
          <FormControl size="small" fullWidth>
            <InputLabel id="rasa-label">Rasa Favorit</InputLabel>
            <Select
              labelId="rasa-label"
              name="rasa"
              value={form.rasa}
              label="Rasa Favorit"
              onChange={handleChange}
            >
              <MenuItem value="jeruk">🍊 Jeruk</MenuItem>
              <MenuItem value="limau">🍋 Limau</MenuItem>
              <MenuItem value="kelapa">🥥 Kelapa</MenuItem>
              <MenuItem value="mangga">🥭 Mangga</MenuItem>
            </Select>
          </FormControl>

          {/* Checkbox Kehadiran */}
          <FormControlLabel
            control={
              <Checkbox
                name="hadir"
                checked={form.hadir}
                onChange={handleChange}
                color="primary"
              />
            }
            label="Akan hadir di acara"
          />

          {/* Input Jumlah Tamu */}
          <TextField
            label="Jumlah Tamu"
            type="number"
            name="jumlahTamu"
            value={form.jumlahTamu}
            onChange={handleChange}
            size="small"
            sx={{ maxWidth: 200 }}
          />

          {/* Upload File Lampiran */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              flexWrap: "wrap",
            }}
          >
            <Button
              component="label"
              variant="outlined"
              color="inherit"
              startIcon={<CloudUploadIcon />}
              size="small"
            >
              Unggah Lampiran
              <input
                type="file"
                hidden
                onChange={(e) => setNamaFile(e.target.files[0]?.name ?? "")}
              />
            </Button>
            {namaFile ? (
              <Chip
                label={namaFile}
                onDelete={() => setNamaFile("")}
                size="small"
                color="primary"
                variant="outlined"
              />
            ) : (
              <Typography variant="caption" color="text.secondary">
                Tidak ada file dipilih
              </Typography>
            )}
          </Box>

          {/* Tombol Aksi */}
          <Stack direction="row" spacing={1.5} sx={{ pt: 1 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<SendIcon />}
            >
              Kirim
            </Button>
            <Button
              type="button"
              variant="outlined"
              color="inherit"
              startIcon={<RestartAltIcon />}
              onClick={handleReset}
            >
              Reset
            </Button>
          </Stack>

          {/* Status Live Text */}
          <Alert severity="info" sx={{ mt: 1 }}>
            <Typography variant="body2">
              <strong>Nama saat ini:</strong> {form.nama || "(kosong)"}
            </Typography>
          </Alert>

          {/* Hasil Submit */}
          {hasil && (
            <Alert severity="success" sx={{ mt: 1 }}>
              <Typography variant="subtitle2" fontWeight="bold">
                Data Berhasil Dikirim:
              </Typography>
              <pre style={{ margin: "6px 0 0", fontSize: "0.85rem" }}>
                {JSON.stringify(hasil, null, 2)}
              </pre>
            </Alert>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
