

const GifsApp = () => {
  return (
    <>
    <div className="content-center">
        <h1> Hello </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </div>
    <div className="search-container">
        <input type="text"  placeholder="Buscar gifs"/>
        <button>Buscar</button>
    </div>
    {/* // Busquedas anteriores */}
    <div className="previous-searches">
        <h2>Busquedas anteriores</h2>
        <ul className="previous-searches-list">
            <li>Goku</li>
            <li>Dragon Ball</li>
            <li>One Piece</li>
            <li>Bleach</li>
            <li>Naruto</li>
        </ul>
    </div>
    </>
  )
}

export default GifsApp