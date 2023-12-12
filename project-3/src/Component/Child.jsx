
import {Component} from 'react'

class Child extends Component{
  
    constructor(){
      
     
      super();
    }
  
  render()
  
  {
    
    
    return(
       <h1 >Hello i am {this.props.Value} from Kottayam</h1>
       )
    
  }
  }
export default Child;