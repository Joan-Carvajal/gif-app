import { useState } from "react"
import GifList from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import CustomHeader from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

const GifsApp = () => {
  const [previusTerms, setPreviusTerms] = useState(['Goku', 'Naruto', 'Saitama', 'Luffy'])
  const handleTermClick = (term: string)=>{

    console.log(term);
  }
  const handleSearch = (query:string) =>{
     query = query.trim().toLocaleLowerCase();
     if(query.length ===0) return;
    if(previusTerms.includes(query)) return;
    setPreviusTerms([query, ...previusTerms].splice(0,8))
    console.log(query);
    
    
    
  }
  return (
    <>
   <CustomHeader 
   title="Buscador de Gifs"
   description="Descubre y comparte el Gif perfecto"
   />
   <SearchBar onQuery={handleSearch} title="Buscar"/>
    
    {/* // Busquedas anteriores */}
    <PreviousSearches onLabalClick={handleTermClick} searches={previusTerms} />
    <GifList gifs={mockGifs}/>
    </>
  )
}

export default GifsApp