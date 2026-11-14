import ListDasar from './ListDasar';
import FilterDemo from './FilterDemo';
import KeyDemo from './KeyDemo';
import Tantangan1 from './Tantangan1';
import Tantangan2 from './Tantangan2';
import Tantangan3 from './Tantangan3';
import Tantangan4 from './Tantangan4';

export default function Materi06() {
    return (
        <>
            <h1>Rendering Lists</h1>

            <h2>1. map()</h2>
            <ListDasar />

            <h2>2. filter() + map()</h2>
            <FilterDemo />

            <h2>3. Kenapa key tidak boleh index</h2>
            <KeyDemo />

            <h2>Tantangan 1: bagi daftar jadi dua</h2>
            <Tantangan1 />

            <h2>Tantangan 2: daftar bersarang</h2>
            <Tantangan2 />

            <h2>Tantangan 3: ekstrak komponen</h2>
            <Tantangan3 />

            <h2>Tantangan 4: pemisah antar item</h2>
            <Tantangan4 />
        </>
    );
}