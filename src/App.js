import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quotes from "./components/quotes/Quotes";
import FavoriteQuotes from "./components/quotes/FavoriteQuotes";
import { Loader } from "react-feather";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("All");
  const [favoriteQuotes, setFavoriteQuotes] = useState([]);
  
  const maxFaves = 3;
  const quotesUrl =
    "https://gist.githubusercontent.com/skillcrush-curriculum/6365d193df80174943f6664c7c6dbadf/raw/1f1e06df2f4fc3c2ef4c30a3a4010149f270c0e0/quotes.js";
  const categories = ["All", "Leadership", "Empathy", "Motivation", "Learning", "Success", "Empowerment"];

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const response = await fetch(quotesUrl);
      const results = await response.json();
      setQuotes(results);
    } catch(error) {
      console.log('An error has occurred', error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchQuotes();
  }, [])

  console.log(quotes);
  // handle selecting a quote category option from CategoryForm select input
  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }
  // filter quotes according to value currently in state
  const filteredQuotes = category === "All" ? quotes : quotes.filter(quote => quote.categories.includes(category));

  // add quote to favorites
  function addToFavorites(quoteId) {
    const selectedQuote = quotes.find(({id}) => id === quoteId); // find quote that was clicked on
    const alreadyFavorite = favoriteQuotes.find(({id}) => id === selectedQuote.id); // check if quote already in faves
    if (alreadyFavorite) { // if already favorited
      console.log("Already in your favorites. Choose another.")
    } else if (favoriteQuotes.length < maxFaves) { // else if there's room for a new fave
      setFavoriteQuotes([...favoriteQuotes, selectedQuote]);
      console.log("Added to favorites!")
    } else { // else max fave number reached
      console.log('Max number of fave quotes reached. Delete a fave to add another.')
    }
  }

  // remove a quote from favorites
  function removeFromFavorites(quoteId) {
    const updatedFavorites = favoriteQuotes.filter(({id}) => id !== quoteId); // filter out clicked quote
    setFavoriteQuotes(updatedFavorites); // set fave quotes state
  }

  return (
    <div className='App'>
      <Header />
      <main>
        <FavoriteQuotes favoriteQuotes={favoriteQuotes} maxFaves={maxFaves} removeFromFavorites={removeFromFavorites} />
        {loading ? (
          <Loader />
        ) : (
          <Quotes 
            quotes={filteredQuotes} 
            categories={categories} 
            category={category} 
            handleCategoryChange={handleCategoryChange}
            addToFavorites={addToFavorites} 
            favoriteQuotes={favoriteQuotes}
            />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;