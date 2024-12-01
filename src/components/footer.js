import { Stack, Typography } from '@mui/material'
import React from 'react'

const footer = () => {
  return (
    <Stack justifyContent="center" padding="8px">
      <Typography variant='caption' color="GrayText">
        Feito com ❤️ por <a href="https://github.com/diegoribeiromartins" target='_blank'>Diego R. Martins</a> - 2024
      </Typography>
    </Stack>
  )
}

export default footer