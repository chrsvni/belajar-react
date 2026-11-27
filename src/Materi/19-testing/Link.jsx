import { useState } from 'react'

export default function Link({ page, children }) {
  const [status, setStatus] = useState('normal')

  return (
    <a
      className={status}
      href={page || '#'}
      onMouseEnter={() => setStatus('hovered')}
      onMouseLeave={() => setStatus('normal')}
    >
      {children}
    </a>
  )
}
