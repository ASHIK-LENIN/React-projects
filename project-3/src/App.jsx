// import { Component } from "react";

// import Child from './Component/Child';



// const message= 'Neymar Junior'

//  class App extends Component{

//   constructor(){
//     super()
//     this.state ={value :[]}

//     }

//     ComponentDidMount(){
//       const url = fetch('http://worldtimeapi.org/api/timezone/Europe');
//       .then




// // try {
// // 	const response =  fetch(url, options);
// // 	const result =  response.json();
// // 	console.log(result);
// // } 

// // catch (error) {
// // 	console.error(error);
// // }

//     }
//     render(){

//           return(

//             <Child Value={message}/>

//           )
//     }

//   }


// export default App;


/////////////////////////////////


import { Component } from "react";
class App extends Component {
  constructor() {

    super();
    this.state = { value: [] }

  }
  
  componentDidMount() {

    const url = fetch('http://worldtimeapi.org/api/timezone/Europe')
      .then(data => data.json())
      .then(data => this.setState({ value: data }))


  }

  render() {
    const { value } = this.state;
    return (
      <>
        {value.map((d) => (<p key={d}>{d}</p>
        ))}

      </>
    );
  }

}

export default App