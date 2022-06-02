import tw from '../images/twitter.svg'
import fb from '../images/facebook.svg'
import button from '@mui/material'

function Footer() {
  return (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: '10%',
      }}
    >
      <div style={{ paddingLeft: '10%' }}>
        <button href="#">About us</button>
        <button href="#">Contact</button>
      </div>
      <div style={{ display: 'flex', gap: '10%' }}>
        <img src={tw} />
        <p>twitter</p>
        <img src={fb} />
        <p>facebook</p>
      </div>
    </footer>
  )
}
export default Footer
