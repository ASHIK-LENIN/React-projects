// import { Component } from "react";

// class App extends Component{
// constructor()
// {
//   super(); 
//   this.state={
//     name:'Varun'
    
//   }
//   this.initialState = this.state;
//  }
 
//  handleChange= ()=>{
  
//   this.setState(this.initialState)

//  }

// render(){
//   return(
//     <>
//     <h1 > {this.state.name} Hello world</h1>
    
//     <p>Primitive Data Type ex. int, long, bool, float, char, etc as Objects: Smalltalk is a “pure” object-oriented programming language unlike Java and C++ as there is no difference between values which are objects and values which are primitive types. In Smalltalk, primitive values such as integers, booleans and characters are also objects. In Java, we have predefined types as non-objects (primitive types).</p>
//     <button onClick={()=> this.setState({name:'Rahul'})}> Add</button>
//     <button onClick={this.handleChange}> minus</button>
//     {/* <button onClick={this.handleChange}> Reset Here</button> */}

//     </>
    
//   )
// }
// }
// export default App;

// import { Component } from "react";

// class App extends Component{
// constructor()
// {
  
//   super(); 
//   this.state={
//     Count:0++
    
//   }
//   this.initialState = this.state;


//  }
 
//  handleAdd=()=>{
//   this.setState({Count:this.state.Count+1})
//  }
//  handleSub=()=> {
//   if(Count<0)
//   this.setState({Count:this.state.Count-1})
//  }
  
//  handleChange= ()=>{
  
//   this.setState(this.initialState)
 
//  }

// render(){
//   return(
//     <>
//     <h1 > {this.state.Count} Hello world</h1>
    
//     <p>Primitive Data Type ex. int, long, bool, float, char, etc as Objects: Smalltalk is a “pure” object-oriented programming language unlike Java and C++ as there is no difference between values which are objects and values which are primitive types. In Smalltalk, primitive values such as integers, booleans and characters are also objects. In Java, we have predefined types as non-objects (primitive types).</p>
//     <button onClick={ this.handleAdd}> Add</button>
//     <button onClick={this.handleSub}> minus</button>
//     <button onClick={this.handleChange}> Reset Here</button>
//     </>
    
//   )
// }
// }
// export default App;

// class App extends Compognent{
//   constructor(){
//     super();
//   }

//   render(){
//     const message="hello";
//     return <ChildComponent Value ={message}/>

//   }
// }
// class ChildComponent extends Component{
//   constructor(){
//     super();
//   }

// render()
// {
  
//   return(
//      <p>{this.props.Value}</p>
//      )
  
// }
// }
// export default App

