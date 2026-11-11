import { useState } from 'react';

export default function Counter({ start = 0 }) {
    const [count, setCount] = useState(start);

    return (
        <div>
            <p>Hitung: {count}</p>

            <button onClick={() => setCount(count + 1)}>+1</button>

            <button
                onClick={() => {
                    setCount(count + 1);
                    setCount(count + 1);
                    setCount(count + 1);
                }}>
                +3 (cara langsung)
            </button>

            <button
                onClick={() => {
                    setCount((c) => c + 1);
                    setCount((c) => c + 1);
                    setCount((c) => c + 1);
                }}
            >
                +3 (updater)
            </button>

            <button onClick={() => setCount(start)}>Reset</button>
        </div>
    );
}