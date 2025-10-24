import type { FC } from "react";

interface PreviousSearchesProps {
  searches?: string[];
  onLabalClick: (term: string) => void;
}

export const PreviousSearches: FC<PreviousSearchesProps> = ({ searches, onLabalClick }) => {
  return (
    <div className="previous-searches">
      <h2>Busquedas anteriores</h2>
      <ul className="previous-searches-list">
        {searches?.map((search) => (
          <li onClick={()=> onLabalClick(search)} 
          key={search}>{search} </li>
        ))
        }

      </ul>
    </div>
  )
}
