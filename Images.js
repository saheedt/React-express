import  React from 'react';

export default class Images extends React.Component{
	constructor(props){
		super(props);

	}

	componentWillMount(){
		//React.Children.map(this.props.children, (item, index)=>{ console.log(item, index) })
		console.log('receiving props in Image component..')
		console.log(this.props.items)
	}

	componentWillReceiveProps(){
		console.log(this.props.items)
	}

	render(){

		return(<li><img src={this.props.items} /></li>)
	}	
}