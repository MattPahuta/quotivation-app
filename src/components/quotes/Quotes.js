import React from "react";
import QuoteCard from "./QuoteCard";
import CategoryForm from "./CategoryForm";

function Quotes({quotes, category, categories, handleCategoryChange, addToFavorites, favoriteQuotes}) {
  return (
    <section className="all-quotes">
      <div className="quotes wrapper">
        <div className="category-header">
          <h2>Pick your Favorite Quotes Below</h2>
          <p>
            {category === "All" 
              ? `Browse through a collection of ${quotes.length} great quotes.` 
              : `Check out ${quotes.length} great ${category} ${quotes.length === 1 ? "quote" : "quotes"}!`}
          </p>
          <CategoryForm categories={categories} category={category} handleCategoryChange={handleCategoryChange} />
        </div>
        {quotes.map(quote => <QuoteCard key={quote.id} quote={quote} addToFavorites={addToFavorites} favoriteQuotes={favoriteQuotes} />)}
      </div>
    </section>
  )
}

export default Quotes;