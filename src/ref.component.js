import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class RefComponent extends Component{

	constructor(){

	super();

		this.state= {

			a: 'Hello',
			b:'Hello',
			c:'Hi'
		}

		//this.update = this.update.bind(this);
	}


	update(){
      this.setState({a:ReactDOM.findDOMNode(this.refs.a).value, 
      b:this.refs.b.value,
      a:this.refs.c.refs.input.value})
	}



	render(){


		return (

           <div>
             <HelloComponent ref="a" update={this.update.bind(this)}> </HelloComponent>{this.state.a}

             <HiComponent ref="c" update={this.update.bind(this)}> </HiComponent>{this.state.c}
              <input  type="text" ref="b" onChange={this.update.bind(this)}/> {this.state.b}

            </div>
			)
	}
}


class HelloComponent extends Component{
	constructor(){
		super();
	}

	render(){
      return (<input  type="text"  onChange={this.props.update}/> )
	}
}


class HiComponent extends Component{
	constructor(){
		super();
	}

	render(){
      return (<input ref="input" type="text"  onChange={this.props.update}/> )
	}
}


export default  RefComponent;