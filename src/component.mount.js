import React, {Component} from 'react';

import ReactDOM from 'react-dom';
class ComponenetMount extends Component{

	constructor(){

		super();

		this.state = {

			value:1
		}

		this.update = this.update.bind(this);
	}
	  componentWillMount(){
           
	    	console.log('Component Will Mount');
	  }


	  componentDidMount(){
        this.setState({m:2})
	  	  console.log('Component Did Mount');
	  	  // access to component As It already rendered in DOM
		console.log(ReactDOM.findDOMNode(this));

	  	//  this.inc = setTimeout(this.update,500)
	  	this.inc = setInterval(this.update,500);
	  }

	update(){
      
      this.setState({value:this.state.value+1})
	}

	componentWillUnmount(){
		console.log('Component Will UnMount');
        clearInterval(this.inc);
		

	}

	render(){
         
          console.log("COmponent Render");
         return ( <div> test component feature <button onClick={this.update}>{this.state.value*this.state.m} </button> </div>)
	}
}


class WrapperComponenetMount extends Component{
  mount(){
  
  ReactDOM.render(<ComponenetMount />, document.getElementById('a'));

  }
  unmount(){
    ReactDOM.unmountComponentAtNode( document.getElementById('a'));
  }

	render(){


		return(
              <div>
	              <button onClick={this.mount.bind(this)}>Mount </button>
	              <button onClick={this.unmount.bind(this)}> Unmount</button>

	              <div id="a" > </div>
             </div>
			)
	}
}
export default WrapperComponenetMount;