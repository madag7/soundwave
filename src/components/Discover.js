import micro from '../images/microphone.svg'
import album from '../images/albums.svg'
import mas from '../images/more.svg'
import colash from '../images/covers.jpg'
import styled from 'styled-components'
import Footer from './Footer'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
  padding-bottom: 10%;

`
const Left = styled.div`
margin-right: 15px;
color: white;
& h1{
  font-size: 39px;

}
& p{
  font-size: 13px;

}`
const ConteinerIcons = styled.div`
display: flex;
justify-content: start;
align-items: center;
& img{
  
  margin-top:7px;
}
& button{
  background-color:#202027;
  border: none;
  margin: 10px;
  width: 100px;
  height: 100px;
}
& p{
  margin-top: 6px;
  font-size: 18px;
  color: white;
}
`
const Right = styled.div`
& img{
  width: 300px;
}
`

function Discover() {
  return (
    <>
    <Container id="discover">
      <Left>
        <h1>Discover new music</h1>
         <ConteinerIcons>
          <button>
            <img src={micro} alt="Microfono" />
            <p>Charts</p>
          </button>
          
          <button>
            <img src={album} alt="Album" />
            <p>Charts</p>
          </button>
          <button>
            <img src={mas} alt="Mas imfo." />
            <p>Charts</p>
          </button>
        </ConteinerIcons>
        <p>By joining you can benefit by listening to the latest albums released.</p>
      </Left>
      <Right>
        <img src={colash} alt="Colash"/>
      </Right>
    </Container>
      <Footer/>
      </>
  )
}

export default Discover
