
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Main from './components/Main.js'
import Discover from './components/Discover.js'
import Join from './components/Join.js'
import Navbar from './components/Navbar'
//import {Container, FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core';



function App() {
  return (
    <div style={{position:0, left:0, rigth:0, bottom:0}}>
      <Navbar/>
      <Main/>
      <Discover/>
      <Join/>
      <Footer/>

    </div>
  );
}

export default App;
