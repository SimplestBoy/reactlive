//
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Car from './app.js';
//
// ReactDOM.render(<Car/>, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      mobile: '',
      pwd: '',
      errormessage: '',
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;

    this.setState({[nam]: val});
  }
  render() {
    let Name = '';
    let Email = '';
    let Mobile = '';
    let Password = '';
    if (this.state.username) {
      Name = <h1>Name :{this.state.username}</h1>;
    }
    if (this.state.email) {
      Email = <h1>Email :{this.state.email}</h1>;
    }
    if (this.state.mobile) {
      Mobile = <h1>Mobile :{this.state.mobile}</h1>;
    }
    if (this.state.pwd) {
      Password = <h1>Password :{this.state.pwd}</h1>;
    }

    return (
      <div>
      <center>
      <form onSubmit={this.mySubmitHandler}  method="post">
      <h1>Registration Form</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your email:</p>
      <input
        type='text'
        name='email'
        onChange={this.myChangeHandler}
      />
      <p>Enter your mobile:</p>
      <input
        type='text'
        name='mobile'
        onChange={this.myChangeHandler}
      />{this.state.errormessage}
      <p>Enter your pwd:</p>
      <input
        type='text'
        name='pwd'
        onChange={this.myChangeHandler}
      />
      <br/>
      <br/>
      <br/>
      <button type='button' class="btn" >Submit</button>
      </form>
      </center>
      <div class="data">
        {Name}
        {Email}
        {Mobile}
        {Password}
      </div>
      </div>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
