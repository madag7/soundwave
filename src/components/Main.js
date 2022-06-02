import imagenchica from '../images/landing-page-girl.png'

function Main() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10%',
        paddingTop: '8%',
      }}
    >
      <img
        className="fotoChica"
        src={imagenchica}
        alt="Imagen Chica"
        style={{ width: '300px' }}
      />
      <div>
        <h1>Feel the music</h1>
        <p>Stream over 20 thousand songs with one click</p>
        <button>Join now</button>
      </div>
    </div>
  )
}

export default Main
