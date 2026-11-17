import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validasi } from './validasi';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import SendIcon from '@mui/icons-material/Send';

const merah = { color: '#ef4444', fontSize: '0.8rem', margin: '4px 0 0 4px', fontWeight: 500 };

export default function FormFormik() {
    return (
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={validasi}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            resetForm();
                        }, 600);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form noValidate>
                            <Stack spacing={2.5} sx={{ maxWidth: 450 }}>
                                <div>
                                    <Typography variant="caption" fontWeight="bold" color="text.secondary">
                                        Email:
                                    </Typography>
                                    <Field
                                        type="email"
                                        name="email"
                                        style={{
                                            width: '100%',
                                            padding: '9px 12px',
                                            borderRadius: 8,
                                            border: '1px solid #cbd5e1',
                                            fontSize: '0.95rem',
                                            boxSizing: 'border-box',
                                            marginTop: 4,
                                        }}
                                    />
                                    <ErrorMessage name="email">
                                        {(pesan) => <p style={merah}>{pesan}</p>}
                                    </ErrorMessage>
                                </div>

                                <div>
                                    <Typography variant="caption" fontWeight="bold" color="text.secondary">
                                        Password:
                                    </Typography>
                                    <Field
                                        type="password"
                                        name="password"
                                        style={{
                                            width: '100%',
                                            padding: '9px 12px',
                                            borderRadius: 8,
                                            border: '1px solid #cbd5e1',
                                            fontSize: '0.95rem',
                                            boxSizing: 'border-box',
                                            marginTop: 4,
                                        }}
                                    />
                                    <ErrorMessage name="password">
                                        {(pesan) => <p style={merah}>{pesan}</p>}
                                    </ErrorMessage>
                                </div>

                                <Button
                                    type="submit"
                                    variant="contained"
                                    disabled={isSubmitting}
                                    startIcon={isSubmitting ? <CircularProgress size={18} color="inherit" /> : <SendIcon />}
                                    sx={{ alignSelf: 'flex-start' }}
                                >
                                    {isSubmitting ? 'Mengirim...' : 'Kirim'}
                                </Button>
                            </Stack>
                        </Form>
                    )}
                </Formik>
            </CardContent>
        </Card>
    );
}