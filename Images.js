import  React from 'react';

export default class Images extends React.Component{
	constructor(props){
		super(props);

	}

	componentDidMount(){
		//declares this just so we can test that this component
		//indeed mounts correctly, otherwise, it's of no use.
	}

	render(){

		return(<li><img src={this.props.items} /></li>)
	}	
}