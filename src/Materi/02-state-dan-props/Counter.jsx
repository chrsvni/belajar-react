import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

export default function Counter({ start = 0 }) {
    const [count, setCount] = useState(start);

    return (
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                    <Typography variant="body1">Nilai Hitung:</Typography>
                    <Chip label={count} color="primary" sx={{ fontSize: '1.1rem', fontWeight: 'bold' }} />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                    <Button variant="contained" onClick={() => setCount(count + 1)}>
                        +1
                    </Button>

                    <Button
                        variant="outlined"
                        onClick={() => {
                            setCount(count + 1);
                            setCount(count + 1);
                            setCount(count + 1);
                        }}
                    >
                        +3 (cara langsung)
                    </Button>

                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => {
                            setCount((c) => c + 1);
                            setCount((c) => c + 1);
                            setCount((c) => c + 1);
                        }}
                    >
                        +3 (updater)
                    </Button>

                    <Button variant="text" color="error" onClick={() => setCount(start)}>
                        Reset
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}