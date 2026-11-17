import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';

function ChatRoom({ roomId }) {
    useEffect(() => {
        console.log(`✅ Tersambung ke ruang "${roomId}"`);
        return () => {
            console.log(`❌ Terputus dari ruang "${roomId}"`);
        };
    }, [roomId]);

    return (
        <Alert severity="success" icon={<ChatIcon />}>
            Selamat datang di ruang <strong>{roomId}</strong>!
        </Alert>
    );
}

export default function ChatRoomDemo() {
    const [roomId, setRoomId] = useState('general');
    const [tampil, setTampil] = useState(false);

    return (
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
                <Stack spacing={2.5} sx={{ maxWidth: 550 }}>
                    <TextField
                        select
                        label="Ruang"
                        size="small"
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                        sx={{ maxWidth: 200 }}
                    >
                        <MenuItem value="general">general</MenuItem>
                        <MenuItem value="travel">travel</MenuItem>
                        <MenuItem value="music">music</MenuItem>
                    </TextField>

                    <Button
                        variant={tampil ? 'outlined' : 'contained'}
                        color={tampil ? 'inherit' : 'primary'}
                        startIcon={tampil ? <CloseIcon /> : <ChatIcon />}
                        onClick={() => setTampil(!tampil)}
                        sx={{ alignSelf: 'flex-start' }}
                    >
                        {tampil ? 'Tutup chat' : 'Buka chat'}
                    </Button>

                    {tampil && <ChatRoom roomId={roomId} />}
                </Stack>
            </CardContent>
        </Card>
    );
}