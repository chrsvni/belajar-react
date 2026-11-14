import PackingTechniques from './PackingTechniques';
import Tantangan1 from './Tantangan1';
import Tantangan2 from './Tantangan2';
import Tantangan3 from './Tantangan3';

export default function Materi05() {
    return (
        <>
            <h1>Conditional Rendering</h1>

            <h2>Lima cara menulis kondisi</h2>
            <PackingTechniques />

            <h2>Tantangan 1: ternary</h2>
            <Tantangan1 />

            <h2>Tantangan 2: &amp;&amp; dan angka 0</h2>
            <Tantangan2 />

            <h2>Tantangan 3: refactor ternary jadi if</h2>
            <Tantangan3 />
        </>
    );
}