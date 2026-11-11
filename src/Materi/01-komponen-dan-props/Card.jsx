export default function Card({ children }) {
    return (
        <div
            style={{
                border: '1px solid #888',
                borderRadius: 8,
                padding: 16,
                margin: '16px 0',
            }}
        >
            {children}
        </div>
    );
}