import React, { useContext } from 'react';
import { RedditContext } from '../../Contexts/RedditContext';

import './styles.css';

const Loadmore = () => {
	const { active, loadmore, page, loadingBtn } = useContext(RedditContext);

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					{ loadingBtn &&
						<>
							{ (page != null) &&
								<div className="btn">
									<button onClick={() => loadmore(active)} disabled className="loadmore loading">Carregando...</button>
								</div>
							}
						</>
					}
					{ !loadingBtn &&
						<>
							{ (page != null) &&
								<div className="btn">
									<button onClick={() => loadmore(active)} className="loadmore">Ver mais</button>
								</div>
							}
						</>
					}
				</div>
			</div>
		</div>
	);
}

export default Loadmore;