// import icons from './img.png';
// import './App.css';
// import ReactDOM from 'react-dom/client'

// function Welcome(props) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={icons} className="App-logo" alt="logo"/>
//         <h1>Welcome to {props.name}</h1>      
//       </header>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const element = <Welcome name="React"/>;
// root.render(element);

// export default Welcome;

import React, { Component } from 'react';
import emoji from './img.png'

export default class Instructions extends Component {

  render() {
    return(
      <>
        <img alt="Logo-react" src={emoji} />
        <p>Hello!</p>
      </>
    )
  }
}