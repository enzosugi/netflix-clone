import React, { useEffect, useState } from 'react';
import MovieRow from './components/movierow/MovieRow';
import FeaturedMovie from './components/featuredmovie/FeaturedMovie';
import Tmdb from './Tmdb';
import './App.css';

export default function App () {
  
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null) 


  useEffect(() => {
      const loadAll = async () => {
        // Carregando os dados
        let list = await Tmdb.getHomeList();
        setMovieList(list);
      }

      loadAll();
  }, []);
  
  
  return(
    <div className="home">

      {featuredData && 
        <FeaturedMovie item={featuredData}/>
      }

        <section className="lists">
          {movieList.map((item, key)=>(
            <MovieRow key={key} title={item.title} items={item.items}/>
          ))}
        </section>
    </div>
  )
}
