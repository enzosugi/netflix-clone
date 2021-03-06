import React, { useEffect, useState } from 'react';
import MovieRow from './components/movierow/MovieRow';
import FeaturedMovie from './components/featuredmovie/FeaturedMovie';
import Tmdb from './Tmdb';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default function App () {
  
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null); 
  const [blackHeader, setBlackHeader] = useState(false);


  useEffect(() => {
      const loadAll = async () => {
        // Carregando os dados da lista 
        let list = await Tmdb.getHomeList();
        setMovieList(list);

        // Pegando o filme destaque
        let originals = list.filter(i=>i.slug === 'originals');
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
        let chosen = originals[0].items.results[randomChosen]; 
        console.log(chosen);

        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
        setFeaturedData(chosenInfo);

      }

      loadAll();
  }, []);
  
  // colocando o fundo preto no header com o evento de scroll da tela
  useEffect(()=>{
      const scrollListener = () => {
        if(window.scrollY > 300) {
          setBlackHeader(true);
        } else {
        setBlackHeader(false);
        }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  })
  
  return(
    <div className="home">
      
      <Header black={blackHeader}/>

      {featuredData && 
        <FeaturedMovie item={featuredData}/>
      }

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
      <Footer/>

      {movieList.length <= 0 &&
      <div className="loading">
        <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_1280,c_limit/Netflix_LoadTime.gif" alt="loading" />
      </div>}    
    </div>

  )
}
