import { useState } from 'react';

const awal = [
    { id: 1, nama: 'Apel' },
    { id: 2, nama: 'Jeruk' },
    { id: 3, nama: 'Mangga' },
];

function Daftar({ judul, items, pakaiIndex }) {
    return (
        <div>
            <h4>{judul}</h4>
            <ul>
                {items.map((item, index) => (
                    <li key={pakaiIndex ? index : item.id}>
                        {item.nama}: <input placeholder="catatan..." />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function KeyDemo() {
    const [items, setItems] = useState(awal);

    function handleHapusPertama() {
        setItems(items.slice(1));
    }

    function handleReset() {
        setItems(awal);
    }

    return (
        <div>
            <button onClick={handleHapusPertama} disabled={items.length === 0}>
                Hapus item pertama
            </button>
            <button onClick={handleReset}>Reset</button>

            <div style={{ display: 'flex', gap: 32 }}>
                <Daftar judul="key = index (salah)" items={items} pakaiIndex={true} />
                <Daftar judul="key = id (benar)" items={items} pakaiIndex={false} />
            </div>
        </div>
    );
}