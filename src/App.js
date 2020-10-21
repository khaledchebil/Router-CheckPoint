import React, {useState} from 'react';
import './App.css';
import 'tachyons'
import CardList from './component/CardList'
import {Filter} from './component/Filter'
import {movies} from './movies'



function App() {

  const [moviesList, setmoviesList] = useState(movies)
// add
const addMovie = (newMovie) => {
  setmoviesList([...moviesList, newMovie]);
};

  return (
<div className='tc'>
   
  
    <CardList 
      moviesList = {moviesList}
      movies = {movies}
    />
      <Filter addMovie={addMovie}/>

</div>
    );
}

export default App;
