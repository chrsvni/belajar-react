import { useContext } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { LevelContext } from './LevelContext'

const varian = {
  1: 'h4',
  2: 'h5',
  3: 'h6',
  4: 'subtitle1',
  5: 'subtitle2',
  6: 'body2',
}

function Heading({ children }) {
  const level = useContext(LevelContext)
  const tingkat = Math.min(Math.max(level, 1), 6)

  return (
    <Typography
      variant={varian[tingkat]}
      component={`h${tingkat}`}
      fontWeight="bold"
      gutterBottom
    >
      {children}
    </Typography>
  )
}

function Section({ children }) {
  const level = useContext(LevelContext)

  return (
    <Box
      sx={{
        pl: level > 0 ? 2 : 0,
        borderLeft: level > 0 ? '2px solid' : 'none',
        borderColor: 'divider',
      }}
    >
      <LevelContext value={level + 1}>{children}</LevelContext>
    </Box>
  )
}

export default function HeadingDemo() {
  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardContent>
        <Section>
          <Heading>Judul</Heading>

          <Section>
            <Heading>Bagian A</Heading>
            <Heading>Bagian B</Heading>

            <Section>
              <Heading>Sub-bagian A1</Heading>
              <Heading>Sub-bagian A2</Heading>

              <Section>
                <Heading>Sub-sub-bagian</Heading>
              </Section>
            </Section>
          </Section>
        </Section>

        <Box sx={{ mt: 3 }}>
          <Heading>Heading di luar Section</Heading>
        </Box>
      </CardContent>
    </Card>
  )
}
