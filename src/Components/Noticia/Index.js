import React, { useState, useEffect } from 'react';
import './styles.css';

import api from './../../api/reddit';

// import { Container } from './styles';

const Noticia = () => {

  const [news, setNews] = useState([]);
  // const [hot, setHot] = useState([]);
  // const [rising, setRising] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(()=>{
		loadNew();
	}, []);

	async function loadNew(){
		try {
      const result = await api.getNew();
      setNews(result.data.data.children);
      console.log(result.data.data.children)
      console.log(result.data.data.children[1].data.created)
      console.log(result.data.data.children[3].data.thumbnail)
      setIsLoading(false);
      console.log(Date.now())
		} catch(err){
      setIsLoading(false);
			console.log(err);
		}
  }

  return (
    <>
      { !isLoading &&
        news.map((news) => (
          <li key={news.data.id}>
            <div className="noticia">
              <div className="thumb">
                {
                  news.data.thumbnail_width !== null &&
                  <img src={news.data.thumbnail} alt="thumbnail"/>
                }
              </div>
              <div className="content">
                <h1>{news.data.title}</h1>
                <p>enviada em {new Date(news.data.created_utc*1000).toString()} <span>por </span><a href="#" className="usuario">{news.data.author}</a></p>
                <a href="#" className="dominio">{news.data.domain}</a>
              </div>
            </div>
          </li>
        ))
      }
      { isLoading &&
        <h1>Loading</h1>
      }
      {/* <li>
        <div className="noticia">
          <div className="thumb"></div>
          <div className="content">
            <h1>Título da parada bem grande assim mais ou menos</h1>
            <p>enviada a 6 horas <span>por </span><a href="#" className="usuario">usuario_nickname</a></p>
            <a href="#" className="dominio">dominio.io</a>
          </div>
        </div>
      </li>
      <li>
        <div className="noticia">
          <div className="thumb"></div>
          <div className="content">
            <h1>Título da parada bem grande assim mais ou menos</h1>
            <p>enviada a 6 horas <span>por </span><a href="#" className="usuario">usuario_nickname</a></p>
            <a href="#" className="dominio">dominio.io</a>
          </div>
        </div>
      </li>
      <li>
        <div className="noticia">
          <div className="thumb"></div>
          <div className="content">
            <h1>Título da parada bem grande assim mais ou menos</h1>
            <p>enviada a 6 horas <span>por </span><a href="#" className="usuario">usuario_nickname</a></p>
            <a href="#" className="dominio">dominio.io</a>
          </div>
        </div>
      </li> */}
    </>
  );
}

export default Noticia;