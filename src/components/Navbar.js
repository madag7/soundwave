import React from 'react'
import logo from '../images/logo.png'
import styled from 'styled-components'

const ContenerdorPosition = styled.div`
position: fixed;
background-color:#202027;  
width: 100%;
`

const Container = styled.div`
display: flex;
justify-content: center;
`

const NavbarLeft = styled.div`
flex: 50;
display: flex;
align-items: center;
justify-content: center;
margin-right: 35px;
& img{
  margin: 25px 4px ;

}
& a{
  font-size:38px;
  margin: 4px;
  color: white;

}
`
const NavbarRight = styled.div`
flex: 50;
display: flex;
align-items: center;
justify-content: center;
margin-right: 35px;

& a{
  color: white;
  margin: 5px;
  background-color:#202027;  
  border: none;  
}

`



const Navbar = () => {
  return (
  <ContenerdorPosition>
    <Container>


    <NavbarLeft>
      <img src={logo}/>
      <a href="#home">Soundwave</a>
    </NavbarLeft>
    <NavbarRight>
      <a href="#discover">Discover</a>
      <a href="#join">Join</a>
    </NavbarRight>
  </Container>
  </ContenerdorPosition>
    // <div
    //   style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '50px' }}
    // >
    //   <div>
    //     <figure>
    //       <img src={logo} />
    //     </figure>
    //     <Typography variant="h6">Soundwave</Typography>
    //   </div>
    //   <Stack direction="row" spacing={2}>
    //     <a variant="contained" color="primary" href="#discover">
    //       Discover
    //     </a>
    //     <a variant="contained" color="primary" href="#join">
    //       Join
    //     </a>
    //   </Stack>
    // </div>
  )
}

export default Navbar
