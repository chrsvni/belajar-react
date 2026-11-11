export default function Badge({ color = 'grey', children = 'Badge' }) {
    return (
        <span
            style={{
                background: color,
                color: 'white',
                padding: '2px 10px',
                borderRadius: 12,
                fontSize: 14,
            }}
        >
            {children}
        </span>
    );
}