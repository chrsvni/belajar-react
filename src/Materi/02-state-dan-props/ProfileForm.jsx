import { useState } from 'react';

export default function ProfileForm() {
    const [form, setForm] = useState({ nama: 'Andi', kota: 'Bandung' });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <div>
                <label>
                    Nama:{' '}
                    <input name="nama" value={form.nama} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Kota:{''}
                    <input name="kota" value={form.kota} onChange={handleChange} />
                </label>
            </div>
            <p>
                {form.nama} tinggal di {form.kota}
            </p>
        </div>
    );
}