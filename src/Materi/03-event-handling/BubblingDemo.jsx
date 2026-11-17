import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

export default function BubblingDemo() {
    const [log, setLog] = useState([]);

    function tambahLog(pesan) {
        setLog((prev) => [...prev, pesan]);
    }

    function clear() {
        setLog([]);
    }

    return (
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
                {/* Area Induk */}
                <Box
                    onClick={() => tambahLog('DIV Induk diklik')}
                    sx={{
                        p: 3,
                        borderRadius: 2,
                        border: '2px dashed',
                        borderColor: 'primary.main',
                        bgcolor: 'action.hover',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s',
                        '&:hover': { bgcolor: 'action.selected' },
                    }}
                >
                    <Typography variant="subtitle1" fontWeight="bold" color="primary" gutterBottom>
                        Area Induk (Klik di luar tombol untuk memicu event Induk)
                    </Typography>

                    <Stack direction="row" spacing={1.5} sx={{ my: 2 }} flexWrap="wrap">
                        <Button
                            variant="contained"
                            color="warning"
                            onClick={() => tambahLog('Tombol A diklik')}
                        >
                            Tombol A (Normal / Bubbling ke Induk)
                        </Button>

                        <Button
                            variant="contained"
                            color="success"
                            onClick={(e) => {
                                e.stopPropagation();
                                tambahLog('Tombol B diklik (stopPropagation)');
                            }}
                        >
                            Tombol B (stopPropagation)
                        </Button>

                        <Button
                            variant="outlined"
                            color="error"
                            startIcon={<DeleteSweepIcon />}
                            onClick={(e) => {
                                e.stopPropagation();
                                clear();
                            }}
                        >
                            Bersihkan Log
                        </Button>
                    </Stack>

                    {/* Log Event */}
                    <Box sx={{ mt: 3 }}>
                        <Typography variant="body2" fontWeight="bold" gutterBottom>
                            Riwayat Event Bubbling ({log.length}):
                        </Typography>
                        {log.length === 0 ? (
                            <Typography variant="caption" color="text.secondary">
                                Belum ada event yang dipicu. Coba klik tombol A, B, atau area kotak ini!
                            </Typography>
                        ) : (
                            <Stack direction="column" spacing={0.8} sx={{ mt: 1 }}>
                                {log.map((pesan, i) => (
                                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Chip label={`#${i + 1}`} size="small" variant="outlined" />
                                        <Typography variant="body2">{pesan}</Typography>
                                    </Box>
                                ))}
                            </Stack>
                        )}
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}