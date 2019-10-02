import React from 'react';
import Noticia from '../Noticia/Index';

import './styles.css';
const Lista = () => {
  return (
    <div className="container">
		<div className="row">
			<div className="col">
				<ul>
					<Noticia />
				</ul>
			</div>
		</div>
    </div>
  );
}

export default Lista