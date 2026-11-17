import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

export default function TodoForm({ onAdd }) {
    const [text, setText] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (text.trim() === '') return;
        onAdd(text.trim());
        setText('');
    }

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 1, my: 2 }}>
            <TextField
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Tambah tugas baru..."
                size="small"
                fullWidth
            />
            <Button type="submit" variant="contained" startIcon={<AddIcon />} sx={{ whiteSpace: 'nowrap' }}>
                Tambah
            </Button>
        </Box>
    );
}