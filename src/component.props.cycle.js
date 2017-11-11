import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class ComponentPropsCycle extends Component{

	constructor(){
		super();
		this.state = {increasing:false}
	}

	update(){

		ReactDOM.render( <ComponentPropsCycle val={this.props.val+1} />,document.getElementById('root'));
	}

	componentWillReceiveProps(nextProps){

		console.log(" componentWillReceiveProps ");

		this.setState({
			increasing:nextProps.val>this.props.val
		})

	}

	shouldComponentUpdate(nextProps, nextState){

		console.log(" shouldComponentUpdate ");
      
      return nextProps.val % 5 ===0;

	}

	componentDidUpdate(prevProps,prevState){

		console.log( `previous Props ${prevProps.val}`);
	}

	render(){

		console.log(this.state.increasing);

		return (
           
           <button onClick={this.update.bind(this)}> {this.props.val} </button>
		)
	}
}

ComponentPropsCycle.defaultProps = {

	val:0
}

export default ComponentPropsCycle;