import React from 'react'
import logo from '../images/logo.png'
import { AppBar, Toolbar, Typography, Stack, Button } from '@mui/material'

const Navbar = () => {
  return (
    <div
      style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '50px' }}
    >
      <div>
        <figure>
          <img src={logo} />
        </figure>
        <Typography variant="h6">Soundwave</Typography>
      </div>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary" href="#discover">
          Discover
        </Button>
        <Button variant="contained" color="primary" href="#join">
          Join
        </Button>
      </Stack>
    </div>
  )
}

export default Navbar
