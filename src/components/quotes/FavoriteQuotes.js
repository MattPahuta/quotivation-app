import React from "react";
import FavoriteQuoteCard from "./FavoriteQuoteCard";

function FavoriteQuotes({favoriteQuotes, maxFaves, removeFromFavorites}) {
  const availableFavorites = maxFaves - favoriteQuotes.length;

  return (
    <section className="favorite-quotes">
      <div className="wrapper quotes">
        {availableFavorites < maxFaves && 
          <h3>
            {favoriteQuotes.length === 1 ? "My favorite quote" : `My top ${favoriteQuotes.length} favorite Quotes`}
          </h3>
        }
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