import { useState } from 'react';
import Materi01 from './Materi/01-komponen-dan-props';
import Materi02 from './Materi/02-state-dan-props';

const daftarMateri = {
  '01 Komponen & Props': Materi01,
  '02 State & Props': Materi02,
};

export default function App() {
  const [aktif, setAktif] = useState('02 State & Props');
  const MateriAktif = daftarMateri[aktif];

  return (
    <>
      <nav>
        {Object.keys(daftarMateri).map((nama) => (
          <button
            key={nama}
            onClick={() => setAktif(nama)}
            disabled={nama === aktif}
          >
            {nama}
          </button>
        ))}
      </nav>

      <MateriAktif />
    </>
  );
}