interface SearchBarProps {
    title: string;

}

export const SearchBar = ({title}: SearchBarProps) => {
  return (
   <div className="search-container">
        <input type="text"  placeholder="Buscar gifs"/>
        <button>{title}</button>
    </div>
  )
}
