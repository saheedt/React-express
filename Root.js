import React from 'react';
import Request from 'superagent';
import Images from './Images.js';
import _ from 'lodash';

const apiKey = require('./config.json').apikey;
console.log
export default class Root extends React.Component {
	constructor(props){
		super(props);
		this.publicApi = `https://pixabay.com/api/?key=${apiKey}`;
		this.state = {Images: false};
		this.loadImages = this.loadImages.bind(this);
	}

	componentWillMount(){
		console.log('component will mount..')
		
	}

	componentDidMount(){
		console.log('component did mount...')
		if(!this.state.Images){
			this.loadImages();
		} 
	}

	loadImages(){
		setTimeout(() => {
			Request.get(this.publicApi).then((response) => {
				//console.log(response.body.hits);
				//this.output.push(item.webformatURL);
				this.output = response.body.hits.map((item) => {					
					return <Images key={item.webformatURL} items={item.webformatURL} />
				});
				console.log(this.output)
				this.setState({
					Images: true
				});
			});
			
		}, 5000)
	}

	render(){
		console.log(this.state)
		
		return (
				!this.state.Images ? (
					<h2>FETCHING IMAGES...!!!</h2>
				) : (
					<div>
						<ul>{this.output}</ul>
					</div>
				)
		)
	}
}