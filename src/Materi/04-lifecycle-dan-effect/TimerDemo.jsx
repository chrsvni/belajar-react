import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ReplayIcon from '@mui/icons-material/Replay';

export default function TimerDemo() {
    const [detik, setDetik] = useState(0);
    const [jalan, setJalan] = useState(false);

    useEffect(() => {
        if (!jalan) return;

        const id = setInterval(() => {
            setDetik((d) => d + 1);
        }, 1000);

        // Cleanup: hentikan timer saat `jalan` berubah atau komponen dilepas
        return () => clearInterval(id);
    }, [jalan]);

    return (
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
                <Stack spacing={2.5} sx={{ maxWidth: 550 }}>
                    <Typography variant="h3" fontWeight="bold">
                        {detik}
                    </Typography>

                    <Stack direction="row" spacing={1.5}>
                        <Button
                            variant="contained"
                            color={jalan ? 'warning' : 'primary'}
                            startIcon={jalan ? <PauseIcon /> : <PlayArrowIcon />}
                            onClick={() => setJalan(!jalan)}
                        >
                            {jalan ? 'Jeda' : 'Mulai'}
                        </Button>
                        <Button
                            variant="outlined"
                            color="inherit"
                            startIcon={<ReplayIcon />}
                            onClick={() => setDetik(0)}
                        >
                            Reset
                        </Button>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
}