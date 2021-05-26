import { moviedata } from "./Data";
import { useState } from "react";
import './App.css';
import Filter from "./component/Filter";
import MovieList from "./component/MovieList";
import AddMovie from "./component/AddMovie";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [movieList, setMovieList] = useState(moviedata);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0);
  const ratingChanged = (note) => {
    setRate(note);
  };
  const handleAdd = (newMovie) => {
    setMovieList([...movieList,newMovie])
  }
  const handleChange = () => {
    
  }
  
  return (
    <div className="App">
      <Filter
          handleChange={handleChange}
          title={title}
          ratingChanged={ratingChanged}
          rate={rate}
        />
        <MovieList
          movieList={movieList.filter(
            (movie) =>
              movie.title.toUpperCase().includes(title.toUpperCase()) &&
              movie.rate >= rate
          )}
        />
        <AddMovie handleAdd={handleAdd} />
    </div>
  );
}

export default App;
