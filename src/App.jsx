import { useState } from 'react';
import Materi01 from './Materi/01-komponen-dan-props';
import Materi02 from './Materi/02-state-dan-props';
import Materi03 from './Materi/03-event-handling';
import Materi05 from './Materi/05-conditional-rendering';
import Materi06 from './Materi/06-rendering-lists';
import Materi07 from './Materi/07-forms';

const daftarMateri = {
  '01 Komponen & Props': Materi01,
  '02 State & Props': Materi02,
  '03 Event Handling': Materi03,
  '05 Conditional Rendering': Materi05,
  '06 Rendering Lists': Materi06,
  '07 Forms': Materi07,
};

export default function App() {
  const [aktif, setAktif] = useState('05 Conditional Rendering');
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