import { useState, useEffect } from 'react';
import './App.css';
import searchIcon from './search.svg';
import Moviecard from './Moviecard';


function App() {
  const API_URL = 'http://www.omdbapi.com?apikey=d77003e';
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  async function searchMovies(title) {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      if (!response.ok) { throw Error(response.statusText) }
      const data = await response.json();

      setMovies(data.Search);
    }
    catch (err) { console.log('err -> ', err) };
  } 


  useEffect(() => {
    searchMovies('Batman');
  }, []);

  return (
    <>
      <div className='app'>
        <h1>MovieLand</h1>

        <div className='search'>
          <input
            type="text"
            placeholder='Search your movie'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <img
            src={searchIcon}
            alt="search"
            onClick={() => searchMovies(search)}
          />
        </div>

        {
          movies.length > 0
            ? (
              <div className='container'>
                {movies.map((movie, ind) => (
                  <Moviecard key={ind} movie={movie} />
                ))}
              </div>
            ) : (
              <div className='empty'>
                <h2>No movies found</h2>
              </div>
            )
        }

      </div>
    </>
  );
}

export default App;
