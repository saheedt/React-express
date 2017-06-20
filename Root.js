import React from 'react';
import Request from 'superagent';
import Images from './Images.js';

const apiKey = require('./config.json').apikey;

export default class Root extends React.Component {
	constructor(props){
		super(props);
		this.publicApi = `https://pixabay.com/api/?key=${apiKey}`;
		this.state = {Images: false};
		this.loadImages = this.loadImages.bind(this);
	}

	componentDidMount(){
		if(!this.state.Images){
			this.loadImages();
		} 
	}

	loadImages(){
		setTimeout(() => {
			Request.get(this.publicApi).then((response) => {
				this.output = response.body.hits.map((item) => {					
					return <Images key={item.webformatURL} items={item.webformatURL} />
				});

				this.setState({
					Images: true
				});
			});
			
		}, 5000)
	}

	render(){
	
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