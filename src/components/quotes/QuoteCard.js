import React from "react";
import { Heart } from "react-feather";

function QuoteCard({quote, addToFavorites, favoriteQuotes}) {
  const currentFavorite = favoriteQuotes.find(({id}) => id === quote.id);
  const faveStyle = currentFavorite ? "#FFC107" : "";
  return (
    <article className="quote-card">
      <div>
        <p className="categories">
          {quote.categories.map(category => <span className="category" key={category}>{category}</span>)}
        </p>
        <h3 className="quote-text">{quote.text}</h3>
      </div>
      <footer className="quote-card__footer">
        <p className="author">{quote.author}</p>
        <button className="button add-favorite-btn" onClick={() => addToFavorites(quote.id)}>
          <Heart style={{fill: faveStyle, color: faveStyle}} />
        </button>
      </footer>
    </article>
  )
}

export default QuoteCard;