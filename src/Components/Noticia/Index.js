import React, { useContext } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/pt-br';

import { RedditContext } from '../../Contexts/RedditContext';

import './styles.css';
import thumb from '../../assets/loading.png'

const Noticia = () => {

	const { news, hot, rising, active } = useContext(RedditContext);
	return (
		<>
			{ active === 'hot' &&
				hot.map((hot) => (
					hot.map(reddit => (
						<li key={reddit.data.id}>
							<a className="linkNoticia" href={reddit.data.url} title={reddit.data.url}>
								<div className="noticia">
									<div className="thumb">
									{ reddit.data.thumbnail_width !== null &&
										<img src={reddit.data.thumbnail} alt="thumbnail" title={`thumbnail: ${reddit.data.title}`}/>
									}
									{ reddit.data.thumbnail_width == null &&
										<img src={thumb} alt="thumbnail" title={`thumbnail: ${reddit.data.title}`}/>
									}
									</div>
									<div className="content">
										<h1>{reddit.data.title}</h1>
										<p>enviada <Moment unix locale="pt-br" fromNow>{reddit.data.created_utc}</Moment> <span>por </span><span className="usuario">{reddit.data.author}</span></p>
										<span className="dominio">{reddit.data.domain}</span>
									</div>
								</div>
							</a>
						</li>
					))
				))
			}
			{ active === 'news' &&
				news.map((news) => (
					news.map(reddit => (
						<li key={reddit.data.id}>
							<a className="linkNoticia" href={reddit.data.url} title={reddit.data.url}>
								<div className="noticia">
									<div className="thumb">
									{ reddit.data.thumbnail_width !== null &&
										<img src={reddit.data.thumbnail} alt="thumbnail" title={`thumbnail: ${reddit.data.title}`}/>
									}
									{ reddit.data.thumbnail_width == null &&
										<img src={thumb} alt="thumbnail" title={`thumbnail: ${reddit.data.title}`}/>
									}
									</div>
									<div className="content">
										<h1>{reddit.data.title}</h1>
										<p>enviada <Moment unix locale="pt-br" fromNow>{reddit.data.created_utc}</Moment> <span>por </span><span className="usuario">{reddit.data.author}</span></p>
										<span className="dominio">{reddit.data.domain}</span>
									</div>
								</div>
							</a>
						</li>
					))
				))
			}
			{ active === 'rising' &&
				rising.map((rising) => (
					rising.map(reddit => (
						<li key={reddit.data.id}>
							<a className="linkNoticia" href={reddit.data.url} title={reddit.data.url}>
								<div className="noticia">
									<div className="thumb">
									{ reddit.data.thumbnail_width !== null &&
										<img src={reddit.data.thumbnail} alt="thumbnail" title={`thumbnail: ${reddit.data.title}`}/>
									}
									{ reddit.data.thumbnail_width == null &&
										<img src={thumb} alt="thumbnail" title={`thumbnail: ${reddit.data.title}`}/>
									}
									</div>
									<div className="content">
										<h1>{reddit.data.title}</h1>
										<p>enviada <Moment unix locale="pt-br" fromNow>{reddit.data.created_utc}</Moment> <span>por </span><span className="usuario">{reddit.data.author}</span></p>
										<span className="dominio">{reddit.data.domain}</span>
									</div>
								</div>
							</a>
						</li>
					))
				))
			}
		
		</>	
	);
}

export default Noticia;