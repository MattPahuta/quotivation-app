import React from "react";
import FavoriteQuoteCard from "./FavoriteQuoteCard";

function FavoriteQuotes({favoriteQuotes, maxFaves, removeFromFavorites}) {
  const availableFavorites = maxFaves - favoriteQuotes.length;

  return (
    <section className="favorite-quotes">
      {availableFavorites < maxFaves && 
        <h3 className="favorite-quotes-heading">
          {favoriteQuotes.length === 1 ? "My Favorite Quote:" : `My Top ${favoriteQuotes.length} Favorite Quotes:`}
        </h3>
      }
      <div className="wrapper favorite-quotes__results">
        {favoriteQuotes.length > 0 && <ul>
          {favoriteQuotes.map((quote, index) => <FavoriteQuoteCard key={quote.id} quote={quote} removeFromFavorites={removeFromFavorites} listPosition={index + 1} />)}
        </ul>}
        {favoriteQuotes.length < maxFaves && (
          <div className="favorite-quotes-description">
            {favoriteQuotes.length === 0 
              ? <p>Add up to three favorite quotes from the options below.</p>
              : <p>You can add {availableFavorites} more {availableFavorites === 1 ? "quote" : "quotes"} to your favorites.</p>}
          </div>
        )}
      </div>
    </section>
  )
}

export default FavoriteQuotes;