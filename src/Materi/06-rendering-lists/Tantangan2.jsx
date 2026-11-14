// TANTANGAN 2
// Tiap resep punya array `bahan`. Tampilkan:
//   - nama resep sebagai judul
//   - daftar bahannya di bawah judul (map di dalam map)
// Perhatikan key untuk masing-masing level.

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

export default function Tantangan2() {
  return (
    <div>
      <h3>Resep</h3>
      {resep.map((r) => (
        <div key={r.id}>
          <h4>{r.nama}</h4>
          <ul>
            {r.bahan.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}