import React, {Component} from 'react';
const HOC = (InnerComponent) => class extends Component{


	constructor(){

		super();
		this.state = {count:0};
	}

	update(){
		this.setState({count:this.state.count+1})
	}


	componentWillMount(){

		console.log(" component Will Mount");
	}
	render(){
		console.log("inner component rednering");
		console.log(this.props);
		return (
              <InnerComponent {...this.props} {...this.state} update={this.update.bind(this)} />
			)
	}
}



class HOCTest extends Component{

	render(){


		return ( <div className="high-order-component"> 
			      <p> Example of Higher Order Component  </p>
			      <ButtonHOC>button</ButtonHOC>
			      <hr/>
			      <LabelHOC text="Hello">label</LabelHOC>

		</div>)
	}
}


const ButtonHOC = HOC((props) => <button onClick={props.update}>{props.children}-{props.count}</button>);

class Label extends Component{
  
	componentWillMount(){
		console.log("label Cmponent will Mount");
	}

	render(){
		console.log("label base Component");
		console.log(this.props);
		return ( <label onMouseMove={this.props.update}>{this.props.children}- {this.props.count}</label>)
	}
}

const LabelHOC = HOC(Label);

export default HOCTest;


