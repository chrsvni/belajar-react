// TANTANGAN 3
// Semua markup resep ada di dalam map. Ekstrak jadi komponen `Resep`
// yang menerima props `nama` dan `bahan`.
//
// Pertanyaan: key ditaruh di mana?
//   a) di dalam komponen Resep (pada <div> paling luar)
//   b) di <Resep key={...} /> saat dipanggil di dalam map
// Coba keduanya dan baca console (F12).

const resep = [
    {
        id: 'nasgor',
        nama: 'Nasi Goreng',
        bahan: ['nasi', 'bawang putih', 'telur', 'kecap manis'],
    },
    {
        id: 'esteh',
        nama: 'Es Teh Manis',
        bahan: ['teh', 'gula', 'es batu'],
    },
];

function Resep({ nama, bahan }) {
    return (
        <div>
            <h4>{nama}</h4>
            <ul>
                {bahan.map((b) => (
                    <li key={b}>{b}</li>
                ))}
            </ul>
        </div>
    );
}

export default function Tantangan3() {
    return (
        <div>
            <h3>Resep</h3>
            {resep.map((r) => (
                <Resep key={r.id} nama={r.nama} bahan={r.bahan} />
            ))}
        </div>
    );
}