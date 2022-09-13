import imagenchica from '../images/landing-page-girl.png'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10%;
padding-top: 10%;
color: white;
& img{
  width: 300px;
}`
const ContainerRight = styled.div`
& h1{
  font-size: 38px;
  margin-bottom: 1px;
}
& button{
  color: white;
  background-color:blue;  
  border: none; 
  padding: 3%;
  border-radius: 5px;

}
`

function Main() {
  return (
    <Container id="home">
      <img src={imagenchica} alt="Imagen Chica"/>
      <ContainerRight>
        <h1>Feel The Music</h1>
        <p>Stream over 20 thousand songs with one<br/> click</p>
        <button>Join now</button>
      </ContainerRight>
    </Container>


    // <div
    //   style={{
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // gap: '10%',
        // paddingTop: '8%',
    //   }}
    // >
    //   <img
    //     className="fotoChica"
    //     src={imagenchica}
    //     alt="Imagen Chica"
    //     style={{ width: '300px' }}
    //   />
    //   <div>
    //     <h1>Feel the music</h1>
    //     <p>Stream over 20 thousand songs with one click</p>
    //     <button>Join now</button>
    //   </div>
    // </div>
  )
}

export default Main
