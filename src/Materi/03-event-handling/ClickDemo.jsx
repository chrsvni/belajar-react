import { useState } from 'react';

function Tombol({ onSmash, children }) {
    return <button onClick={onSmash}>{children}</button>;
}

export default function ClickDemo() {
    const [log, setLog] = useState('Belum ada klik');

    function handleClick() {
        setLog('Handler bernama diklik');
    }

    function handleSapa(nama) {
        setLog(`Halo, ${nama}!`);
    }

    return (
        <div>
            <p>Log: {log}</p>

            <button onClick={handleClick}>Handler bernama</button>

            <button onClick={() => setLog('Handler inline diklik')}>
                Handler inline
            </button>

            <button onClick={() => handleSapa('Andi')}>Sapa Andi</button>
            <button onClick={() => handleSapa('Biru')}>Sapa Biru</button>

            <Tombol onSmash={() => setLog('Smash!')}>Smash</Tombol>
        </div>
    );
}