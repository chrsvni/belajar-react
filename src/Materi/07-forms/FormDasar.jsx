import { useState } from 'react';

const awal = {
    nama: '',
    pesan: 'Tulis pesanmu di sini...',
    rasa: 'kelapa',
    hadir: true,
    jumlahTamu: 2,
};

export default function FormDasar() {
    const [form, setForm] = useState(awal);
    const [namaFile, setNamaFile] = useState('');
    const [hasil, setHasil] = useState(null);

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setHasil({ ...form, namaFile });
    }

    function handleReset() {
        setForm(awal);
        setHasil(null);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Nama:{' '}
                    <input name="nama" value={form.nama} onChange={handleChange} />
                </label>
            </div>

            <div>
                <label>
                    Pesan:
                    <br />
                    <textarea name="pesan" value={form.pesan} onChange={handleChange} />
                </label>
            </div>

            <div>
                <label>
                    Rasa favorit:{' '}
                    <select name="rasa" value={form.rasa} onChange={handleChange}>
                        <option value="jeruk">Jeruk</option>
                        <option value="limau">Limau</option>
                        <option value="kelapa">Kelapa</option>
                        <option value="mangga">Mangga</option>
                    </select>
                </label>
            </div>

            <div>
                <label>
                    <input
                        type="checkbox"
                        name="hadir"
                        checked={form.hadir}
                        onChange={handleChange}
                    />{' '}
                    Akan hadir
                </label>
            </div>

            <div>
                <label>
                    Jumlah tamu:{' '}
                    <input
                        type="number"
                        name="jumlahTamu"
                        value={form.jumlahTamu}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    Lampiran:{' '}
                    <input
                        type="file"
                        onChange={(e) => setNamaFile(e.target.files[0]?.name ?? '')}
                    />
                </label>
            </div>

            <button type="submit">Kirim</button>
            <button type="button" onClick={handleReset}>
                Reset
            </button>

            <p>Nama saat ini: {form.nama || '(kosong)'}</p>
            {hasil && <pre>{JSON.stringify(hasil, null, 2)}</pre>}
        </form>
    );
}