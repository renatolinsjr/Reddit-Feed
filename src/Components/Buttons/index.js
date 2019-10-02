import React, { useContext } from 'react';
import { RedditContext } from '../../Contexts/RedditContext';

import './styles.css';

export default function Buttons() {

	const { loadHot, loadNew, loadRising, active } = useContext(RedditContext);
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="btns">
						{ active === 'hot'&&
							<>
								<button onClick={() => loadHot()} className="tabs ativo">HOT</button>
								<button onClick={() => loadNew()} className="tabs">NEWS</button>
								<button onClick={() => loadRising()} className="tabs">RISING</button>
							</>
						}
						{ active === 'news'&&
							<>
								<button onClick={() => loadHot()} className="tabs">HOT</button>
								<button onClick={() => loadNew()} className="tabs ativo">NEWS</button>
								<button onClick={() => loadRising()} className="tabs">RISING</button>
							</>
						}
						{ active === 'rising'&&
							<>
								<button onClick={() => loadHot()} className="tabs">HOT</button>
								<button onClick={() => loadNew()} className="tabs">NEWS</button>
								<button onClick={() => loadRising()} className="tabs ativo">RISING</button>
							</>
						}
					</div>
				</div>
			</div>
		</div>
	);
}
