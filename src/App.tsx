import './App.css';
import { landingPageDTO } from './Movies/movies.model';
import MoviesList from './Movies/MoviesList';
import { useEffect, useState } from 'react';

function App() {

  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: 'Spider-Man: Far From Home',
            poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
          },
          {
            id: 2,
            title: 'Titanic',
            poster: 'https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png'
          }
        ],
        upcomingReleases: [
          {
            id: 3,
            title: 'Avatar 2',
            poster: 'https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg'
          }
        ]
      })

    }, 1000);

    return () => clearTimeout(timerId);
  }, [])

  return (
    <div className='container'>
      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters} />

      <h3>Upcoming Releases</h3>
      <MoviesList movies={movies.upcomingReleases} />
    </div>
  );
}

export default App;
