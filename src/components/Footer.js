import tw from '../images/twitter.svg'
import fb from '../images/facebook.svg'
import button from '@mui/material'
import { RiceBowl } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #202027;
`
const Left = styled.div`
display: flex;
justify-content: center;
flex: 50;
& button{
  color: white;
  margin: 5px;
  background-color:#202027;  
  border: none;
  font-size: 13px;  
}

`
const Right = styled.div`
display: flex;
justify-content: center;
flex: 50;
display: flex;
justify-content: center;
align-items: center;
& img{
  width: 20px;
  margin: 10px;
}
& p{
  color: white;
}
`

function Footer() {
  return (
    <Container>
      <Left>
        <button href="#">About us</button>
        <button href="#">Contact</button>
      </Left>
      <Right>
        <img src={tw} />
        <p>twitter</p>
        <img src={fb} />
        <p>facebook</p>
      </Right>
    </Container>
  )
}
export default Footer
