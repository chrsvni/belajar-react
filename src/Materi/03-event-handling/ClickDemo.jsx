import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

function Tombol({ onSmash, children }) {
    return (
        <Button variant="contained" color="secondary" onClick={onSmash}>
            {children}
        </Button>
    );
}

export default function ClickDemo() {
    const [log, setLog] = useState('Belum ada klik');

    function handleClick() {
        setLog('Handler bernama diklik');
    }

    function handleSapa(nama) {
        setLog(`Halo, ${nama}!`);
    }

    return (
        <Box>
            <Alert severity="info" sx={{ mb: 2 }}>
                <strong>Status Log:</strong> {log}
            </Alert>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Button variant="outlined" onClick={handleClick}>
                    Handler bernama
                </Button>

                <Button variant="outlined" color="primary" onClick={() => setLog('Handler inline diklik')}>
                    Handler inline
                </Button>

                <Button variant="contained" onClick={() => handleSapa('Andi')}>
                    Sapa Andi
                </Button>
                <Button variant="contained" color="info" onClick={() => handleSapa('Biru')}>
                    Sapa Biru
                </Button>

                <Tombol onSmash={() => setLog('💥 Smash!')}>Smash</Tombol>
            </Stack>
        </Box>
    );
}