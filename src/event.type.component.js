import React,{Component} from 'react';
export default class EventTypeComponent extends Component{

	constructor(){

		super();

		this.state = {
			currentEvent: '......'
		}
		this.update = this.update.bind(this);
	}

	update(e){


		this.setState({currentEvent:e.type})
	}

	render(){


		return (<div> <textarea onKeyPress={this.update} onCopy={this.update}
			onCut={this.update} onFocus={this.update} onPaste={this.update} onBlur={this.update}> </textarea>
			    <p>{this.state.currentEvent} </p>

		 </div>) 
	}

}