import { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export default function CheckboxWithLabel({ labelOn, labelOff }) {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
      }
      label={isChecked ? labelOn : labelOff}
    />
  )
}
