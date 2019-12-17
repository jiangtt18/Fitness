import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import FitnessRoutes from "./routes/FitnessRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<Router><FitnessRoutes /></Router>,
	document.getElementById('root')
);
