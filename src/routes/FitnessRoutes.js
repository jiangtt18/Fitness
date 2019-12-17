import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Fitness from '../App'

const FitnessRoutes = props => {
	return (
			<Router>
				<div>
					<Route
						path='/fitness/dashboard'
						render={({ history, match }) => {
							return <Fitness history={history} match={match}/>;
						}}
					/>
					{/*<Route*/}
					{/*	path='/streams/system_reports/:uuid'*/}
					{/*	render={({ history, match }) => (*/}
					{/*		<StreamsFormWrapper history={history} match={match} customerData={customerData} userData={userData} />*/}
					{/*	)}*/}
					{/*/>*/}
				</div>
			</Router>
	);
};

export default FitnessRoutes;