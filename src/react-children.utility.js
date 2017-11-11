import {Component} from 'react';
import React from 'react';

class ChildrenTest extends Component{

	render(){
		return  (


			<Parent > 
			<div className="children-utility">
			<p> Children utility Concept </p>
				
				<div className="childB" > </div>
				<div className="childB" > </div>
				 </div>
			 </Parent>

			)
	}
}


class Parent extends React.Component{

	render(){

		// console.log('abc');
      
		   // Problem with this it will return array in case of multiple children 
		   //and as object in case of single children
		//let items = this.props.children.map( child =>child);
       // this will always return 
         console.log(React.children);
         debugger;
		let items = React.children.map(this.props.children, child =>child);
		console.log(items);
		
		return null;
	}
}


export default  ChildrenTest