import { useState } from 'react';
import { validasi } from './validasi';

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

    const merah = { color: 'crimson', margin: '4px 0' };

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div>
                <label>
                    Email:{' '}
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </label>
                {touched.email && errors.email && <p style={merah}>{errors.email}</p>}
            </div>

            <div>
                <label>
                    Password:{' '}
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </label>
                {touched.password && errors.password && (
                    <p style={merah}>{errors.password}</p>
                )}
            </div>

            <button type="submit">Kirim</button>
            <button type="button" onClick={handleReset}>
                Reset
            </button>

            {terkirim && <pre>{JSON.stringify(terkirim, null, 2)}</pre>}
        </form>
    );
}