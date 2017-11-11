import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import RefComponent from './ref.component';
import EventTypeComponent from './event.type.component';
import WrapperComponenetMount from './component.mount';
import ComponentPropsCycle from './component.props.cycle';
import HOCTest from './higher.order.component';
import ChildrenTest from './react-children.utility';
class App extends Component {

  constructor(){
    super();
    this.state = { text : "default text"};
  }

  update(e){

    this.setState({text:e.target.value});


  }
  render() {

     let text = this.props.text;
     //  Test Concept of Props.Children and Bind Event
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
         <Widget update={this.update.bind(this)} > </Widget>
        <p className="App-intro">
         {this.state.text}
        </p>
     
        <Button> <Symbol> </Symbol>  Love React </Button>

        <Hello name="Jitendra"> </Hello>

        <EventTypeComponent> </EventTypeComponent>

        <RefComponent> </RefComponent>

        <WrapperComponenetMount> </WrapperComponenetMount>

        <ComponentPropsCycle> </ComponentPropsCycle>
        <HOCTest> </HOCTest>

        <ChildrenTest> </ChildrenTest>
      </div>
    );
  }


}

const Widget = (props) => <input type="text" onChange={props.update} />

const Button = (props) => <button> {props.children} </button>

const Symbol = (props) => <span> &;Heart  </span>


const Hello = (props) => <p> {props.name} </p>

Hello.propTypes = {

 // name:PropTypes.string.isRequired
 // Porps Type as Function
 name:function(props,propName,componentName){
   if(props[propName].length <8){
     return new Error( `Invalid prop  ${propName} supplied to
       ${componentName} Validation failed.`);
   }
 }
}

export default App;
