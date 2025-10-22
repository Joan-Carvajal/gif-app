interface PreviousSearchesProps {
    title?: string;
    tags?: string[];
}

export const PreviousSearches = ({title, tags}:PreviousSearchesProps) => {
  return (
    <div className="previous-searches">
        <h2>{title}</h2>
        <ul className="previous-searches-list">
            {tags?.map((tag) => (<li key={tag}>{tag}</li>
            ))}
            
        </ul>
    </div>
  )
}
