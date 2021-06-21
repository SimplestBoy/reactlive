import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964};
  }

  changeColor = () => {
    setTimeout( () =>{
      this.setState({color: "blue"})
    },1000
  )
  }
    // static getDerivedStateFromProps(props, state) {
    //   return {color: props.favcol };
    // }

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}

export default Car;

// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <h2>James: I Have a {this.props.count} Car!</h2>;
//   }
// }
//
// class Garage extends React.Component {
//
//   render() {
//     // var car = {name : "Ford" , count : 11};
//     return(
//       <div>
//         <h2>
//             Mick: How Many Cars in your Garage?
//           <Car count="Mustang"/>
//         </h2>
//       </div>
//     )
//   }
// }
// export default Garage;
//
// // function Carss() {
// //   return <h2>Hi, I am also a Car!</h2>;
// // }
// // const myelement =(
// //   <div>
// //   <label>Name : </label>
// //  <input type="text" />
// // </div>
// // );
//
// // ReactDOM.render(<Garage color="Green"/>, document.getElementById('root'));
