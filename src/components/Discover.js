import micro from '../images/microphone.svg'
import album from '../images/albums.svg'
import mas from '../images/more.svg'
import colash from '../images/covers.jpg'

function Discover() {
  return (
    <div
      id="discover"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10%',
        paddingTop: '8%',
        paddingBottom: '8%',
      }}
    >
      <div>
        <h1>Discover new music</h1>
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
        <p>
          By joining you can benefit by listening to the latest albums released
        </p>
      </div>
      <img
        className="colash"
        src={colash}
        alt="Colash"
        style={{ width: '300px' }}
      />
    </div>
  )
}

export default Discover
