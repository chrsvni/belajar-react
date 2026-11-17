import { useState } from 'react';
import { validasi } from './validasi';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const awal = { email: '', password: '' };

export default function FormValidasi() {
    const [values, setValues] = useState(awal);
    const [touched, setTouched] = useState({});
    const [terkirim, setTerkirim] = useState(null);

    const errors = validasi(values);
    const valid = Object.keys(errors).length === 0;

    function handleChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    function handleBlur(e) {
        setTouched({ ...touched, [e.target.name]: true });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setTouched({ email: true, password: true });
        if (valid) {
            setTerkirim(values);
        }
    }

    function handleReset() {
        setValues(awal);
        setTouched({});
        setTerkirim(null);
    }

    return (
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
                <Stack component="form" onSubmit={handleSubmit} noValidate spacing={2.5} sx={{ maxWidth: 450 }}>
                    <TextField
                        label="Email"
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                        size="small"
                        fullWidth
                    />

                    <TextField
                        label="Password"
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                        size="small"
                        fullWidth
                    />

                    <Stack direction="row" spacing={1}>
                        <Button type="submit" variant="contained" startIcon={<SendIcon />}>
                            Kirim
                        </Button>
                        <Button type="button" variant="outlined" color="inherit" startIcon={<RestartAltIcon />} onClick={handleReset}>
                            Reset
                        </Button>
                    </Stack>

                    {terkirim && (
                        <Alert severity="success" sx={{ mt: 2 }}>
                            <Typography variant="subtitle2" fontWeight="bold">Data Berhasil Dikirim:</Typography>
                            <pre style={{ margin: '4px 0 0', fontSize: '0.85rem' }}>{JSON.stringify(terkirim, null, 2)}</pre>
                        </Alert>
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
}