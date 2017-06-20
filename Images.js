import  React from 'react';

export default class Images extends React.Component{
	constructor(props){
		super(props);

	}

	render(){

		return(<li><img src={this.props.items} /></li>)
	}	
}