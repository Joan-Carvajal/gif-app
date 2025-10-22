import { mockGifs } from "./mock-data/gifs.mock"
import CustomHeader from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

const GifsApp = () => {
  return (
    <>
   <CustomHeader 
   title="Buscador de Gifs"
   description="Descubre y comparte el Gif perfecto"
   />
   <SearchBar title="Buscar"/>
    
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
    <div className="gifs-container">
      {
        mockGifs.map(gif => (
          <div key={gif.id} className="gif-card"> 
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>
              {gif.width} x {gif.height}
            </p>
          </div>
        ))
      }
      
    </div>
    </>
  )
}

export default GifsApp