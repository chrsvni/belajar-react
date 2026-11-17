import { Component, useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

// Versi class (legacy)
class SalamKelas extends Component {
    componentDidMount() {
        console.log('[class] componentDidMount: tampil');
    }

    componentDidUpdate(prevProps) {
        if (prevProps.nama !== this.props.nama) {
            console.log(`[class] componentDidUpdate: ${prevProps.nama} jadi ${this.props.nama}`);
        }
    }

    componentWillUnmount() {
        console.log('[class] componentWillUnmount: dilepas');
    }

    render() {
        return (
            <Alert severity="warning" icon={false}>
                Halo (class), <strong>{this.props.nama}</strong>!
            </Alert>
        );
    }
}

// Versi hook
function SalamHook({ nama }) {
    useEffect(() => {
        console.log(`[hook] Effect mulai untuk "${nama}"`);
        return () => console.log(`[hook] cleanup untuk "${nama}"`);
    }, [nama]);

    return (
        <Alert severity="info" icon={false}>
            Halo (hook), <strong>{nama}</strong>!
        </Alert>
    );
}

export default function ClassVsHookDemo() {
    const [nama, setNama] = useState('Andi');
    const [tampil, setTampil] = useState(true);

    return (
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
                <Stack spacing={2.5} sx={{ maxWidth: 550 }}>
                    <Stack direction="row" spacing={1.5}>
                        <Button
                            variant="contained"
                            startIcon={<SwapHorizIcon />}
                            onClick={() => setNama(nama === 'Andi' ? 'Sinta' : 'Andi')}
                        >
                            Ganti nama
                        </Button>
                        <Button
                            variant="outlined"
                            color="inherit"
                            onClick={() => setTampil(!tampil)}
                        >
                            {tampil ? 'Lepas komponen' : 'Pasang komponen'}
                        </Button>
                    </Stack>

                    {tampil && (
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                                gap: 2,
                            }}
                        >
                            <SalamKelas nama={nama} />
                            <SalamHook nama={nama} />
                        </Box>
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
}