import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
// the BrowserRouter uses it's own history object therefore we are now using a plain router to make sure that we are in charge of the history now
import { Router, Route } from 'react-router-dom';

import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import history from '../history';

const App = () => {
	return (
		<div className="ui container">
			{/* passing in the history object that it uses our implementation of the history object */}
			<Router history={history}>
				<div>
					<Header />
					<Route path="/" exact component={StreamList} />
					<Route path="/streams/new" exact component={StreamCreate} />
					<Route path="/streams/edit" exact component={StreamEdit} />
					<Route path="/streams/delete" exact component={StreamDelete} />
					<Route path="/streams/show" exact component={StreamShow} />
				</div>
			</Router>
		</div>
	);
};

export default App;
