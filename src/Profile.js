import React from 'react';
import Router from 'react-router';

import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import ReactFireMixin from 'reactfire';

var Profile = React.createClass({
	mixins:[ReactFireMixin],
	getInitialState: function(){
		return {
			bio:{
				name: 'Aamir'
			},
			repos:[1,2,3],
			notes:['a', 'b', 'c']
		}
	},

	componentDidMount: function(){

	},
	
	render: function(){
		console.log(this.props)
		return(
			<div className="row">
			  <div className="col-md-4">
			  	<UserProfile username={ this.props.params.username } bio={ this.state.bio } />
			  </div>
			  <div className="col-md-4">
			  	<Repos repos = { this.state.repos } />
			  </div>
			  <div className="col-md-4">
			  	<Notes notes = { this.state.notes }/>
			  </div>
			</div>
		)
	}
})

module.exports = Profile;