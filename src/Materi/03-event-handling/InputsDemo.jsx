import { useState } from 'react';

export default function InputsDemo() {
    const [nama, setNama] = useState('');
    const [umur, setUmur] = useState('20');
    const [setuju, setSetuju] = useState(false);
    const [warna, setWarna] = useState('biru');
    const [ukuran, setUkuran] = useState('M');
    const [pesan, setPesan] = useState('');

    const umurAngka = Number(umur); // input number tetap menghasilkan string

    return (
        <div>
            {/* Teks */}
            <div>
                <label>
                    Nama:{' '}
                    <input value={nama} onChange={(e) => setNama(e.target.value)} />
                </label>
            </div>

            {/* Angka + tombol yang juga mengubah state */}
            <div>
                <label>
                    Umur:{' '}
                    <input
                        type="number"
                        value={umur}
                        onChange={(e) => setUmur(e.target.value)}
                    />
                </label>
                <button onClick={() => setUmur(umurAngka + 10)}>+10 tahun</button>
            </div>

            {/* Checkbox: pakai checked dan e.target.checked */}
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={setuju}
                        onChange={(e) => setSetuju(e.target.checked)}
                    />{' '}
                    Saya setuju
                </label>
            </div>

            {/* Select */}
            <div>
                <label>
                    Warna:{' '}
                    <select value={warna} onChange={(e) => setWarna(e.target.value)}>
                        <option value="biru">Biru</option>
                        <option value="merah">Merah</option>
                        <option value="hijau">Hijau</option>
                    </select>
                </label>
            </div>

            {/* Radio */}
            <div>
                Ukuran:{' '}
                {['S', 'M', 'L'].map((u) => (
                    <label key={u}>
                        <input
                            type="radio"
                            name="ukuran"
                            checked={ukuran === u}
                            onChange={() => setUkuran(u)}
                        />
                        {u}{' '}
                    </label>
                ))}
            </div>

            {/* Textarea */}
            <div>
                <label>
                    Pesan:
                    <br />
                    <textarea value={pesan} onChange={(e) => setPesan(e.target.value)} />
                </label>
            </div>

            {/* Hasil ter-update setiap ketikan */}
            {nama !== '' && <p>Nama: {nama}</p>}
            <p>Umur: {umurAngka}</p>
            <p>Setuju: {setuju ? 'Ya' : 'Belum'}</p>
            <p>
                Pilihan: {warna}, ukuran {ukuran}
            </p>
            <p>Jumlah karakter pesan: {pesan}</p>
        </div>
    );
}