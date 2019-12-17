import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Fitness from '../App'

const FitnessRoutes = props => {
	return (
				<div>
					<Switch>
						<Redirect exact from='/' to='/fitness/dashboard'/>
						<Route
							path='/fitness/dashboard'
							component={({ history, match }) => {
								return <Fitness history={history} match={match}/>;
							}}
						/>
					</Switch>
				</div>
	);
};

export default withRouter(FitnessRoutes);