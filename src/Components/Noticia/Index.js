import React, { useContext } from 'react';
import { RedditContext } from '../../Contexts/RedditContext';

import './styles.css';

const Noticia = () => {

	const { isLoading, news, hot, rising, active } = useContext(RedditContext);


	return (
		<>
			{ !isLoading &&
				<>
					{ active === 'news' &&
						news.map((news) => (
							news.map(reddit => (
								<li key={reddit.data.id}>
									<a className="linkNoticia" href={reddit.data.url}>
										<div className="noticia">
											<div className="thumb">
											{
												reddit.data.thumbnail_width !== null &&
												<img src={reddit.data.thumbnail} alt="thumbnail" title={`thumbnail: ${reddit.data.title}`}/>
											}
											</div>
											<div className="content">
												<h1>{reddit.data.title}</h1>
												<p>enviada em {new Date(reddit.data.created_utc*1000).toString()} <span>por </span><span className="usuario">{reddit.data.author}</span></p>
												<a href={reddit.data.url} className="dominio">{reddit.data.domain}</a>
											</div>
										</div>
									</a>
								</li>
							))
						))
					}
					{ active === 'hot' &&
						hot.map((hot) => (
							hot.map(reddit => (
								<li key={reddit.data.id}>
									<a className="linkNoticia" href={reddit.data.url}>
										<div className="noticia">
											<div className="thumb">
											{
												reddit.data.thumbnail_width !== null &&
												<img src={reddit.data.thumbnail} alt="thumbnail" title={`thumbnail: ${reddit.data.title}`}/>
											}
											</div>
											<div className="content">
												<h1>{reddit.data.title}</h1>
												<p>enviada em {new Date(reddit.data.created_utc*1000).toString()} <span>por </span><span className="usuario">{reddit.data.author}</span></p>
												<a href={reddit.data.url} className="dominio">{reddit.data.domain}</a>
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
									<a className="linkNoticia" href={reddit.data.url}>
										<div className="noticia">
											<div className="thumb">
											{
												reddit.data.thumbnail_width !== null &&
												<img src={reddit.data.thumbnail} alt="thumbnail" title={`thumbnail: ${reddit.data.title}`}/>
											}
											</div>
											<div className="content">
												<h1>{reddit.data.title}</h1>
												<p>enviada em {new Date(reddit.data.created_utc*1000).toString()} <span>por </span><span className="usuario">{reddit.data.author}</span></p>
												<a href={reddit.data.url} className="dominio">{reddit.data.domain}</a>
											</div>
										</div>
									</a>
								</li>
							))
						))
					}
				</>
			}
			{ isLoading &&
				<h1>Loading</h1>
			}
		
		</>	
	);
}

export default Noticia;