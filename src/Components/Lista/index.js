import React, { useContext } from 'react';
import Noticia from '../Noticia/Index';

import { RedditContext } from '../../Contexts/RedditContext';
import Loading from './../Loading';

import './styles.css';

const Lista = () => {
	const { isLoading } = useContext(RedditContext);
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					{ !isLoading &&
						<ul>
							<Noticia />
						</ul>
					}
					{ isLoading &&
						<ul>
							<Loading />
						</ul>
					}
				</div>
			</div>
		</div>
	);
}

export default Lista