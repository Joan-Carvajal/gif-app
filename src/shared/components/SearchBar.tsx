import { useEffect, useState } from "react";

interface SearchBarProps {
  title: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({ title = "Buscar", onQuery }: SearchBarProps) => {
  const [query, setQuery] = useState('')
  useEffect(()=>{
    console.log("prueba");
    
  },[])

  const handleSearch = () => {
    onQuery(query)
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>)=>{
          if( event.key=== 'Enter') handleSearch();
        }

  return (
    <div className="search-container">
     
      <input type="text" onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        value={query}
        placeholder="Buscar gifs" />
      <button onClick={handleSearch}
      >{title}</button>
    </div>
  )
}
