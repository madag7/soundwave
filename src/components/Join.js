import {
  FormControl,
  InputLabel,
  Input,
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
        paddingTop: '8%',
        paddingBottom: '8%',
      }}
    >
      <h1 style={{fontSize: "39px"}}>Join the </h1>
      <h1 style={{fontSize: "39px", marginRight: "80px", marginLeft: "1%", color: "#bc3a80"}}>fun.</h1>
      <div style={{ backgroundColor: '#202027', padding:  "5% 5% 1% 5%", borderRadius: "15px" }}>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="name" style={{color: "white", margin: "15px"}}>Name:</InputLabel>
            <Input id="name" aria-actibeby="nombre" style={{width: "260px"}}/>
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="email" style={{color: "white", margin: "15px"}}>Email:</InputLabel>
            <Input id="email" type="email" aria-actibeby="email-helper" style={{width: "260px"}}/>
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="psw" style={{color: "white", margin: "15px"}} >Password:</InputLabel>
            <Input id="psw" type="password" aria-actibeby="password-helper" style={{width: "260px"}}/>
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <Button variant="contained" color="primary" style={{margin: "30px"}}>
            Iniciar Sesion
          </Button>
        </Grid>
      </div>
    </Grid>
  )
}
