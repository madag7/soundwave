import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Grid,
} from '@mui/material'

export default function Join() {
  return (
    <Grid
      conteiner
      id="join"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10%',
        paddingTop: '8%',
        paddingBottom: '8%',
      }}
    >
      <h1>Join the fun.</h1>
      <div style={{ backgroundColor: 'white' }}>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="name">Name:</InputLabel>
            <Input id="name" aria-actibeby="nombre" />
            <FormHelperText id="nombre">Tu nombre </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="email">Email:</InputLabel>
            <Input id="email" type="email" aria-actibeby="email-helper" />
            <FormHelperText id="email-helper">
              Tu email personal{' '}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="psw">Password:</InputLabel>
            <Input id="psw" type="password" aria-actibeby="password-helper" />
            <FormHelperText id="password-helper">
              Entre 8y 16 caraceres
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <Button variant="contained" color="primary">
            Iniciar Sesion
          </Button>
        </Grid>
      </div>
    </Grid>
  )
}
