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
								<button onClick={() => loadHot()} className="tabs ativo" title="HOT">HOT</button>
								<button onClick={() => loadNew()} className="tabs" title="NEWS">NEWS</button>
								<button onClick={() => loadRising()} className="tabs" title="RISING">RISING</button>
							</>
						}
						{ active === 'news'&&
							<>
								<button onClick={() => loadHot()} className="tabs" title="HOT">HOT</button>
								<button onClick={() => loadNew()} className="tabs ativo" title="NEWS">NEWS</button>
								<button onClick={() => loadRising()} className="tabs" title="RISING">RISING</button>
							</>
						}
						{ active === 'rising'&&
							<>
								<button onClick={() => loadHot()} className="tabs" title="HOT">HOT</button>
								<button onClick={() => loadNew()} className="tabs" title="NEWS">NEWS</button>
								<button onClick={() => loadRising()} className="tabs ativo" title="RISING">RISING</button>
							</>
						}
					</div>
				</div>
			</div>
		</div>
	);
}
