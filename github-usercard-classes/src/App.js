import React from 'react';
import axios from 'axios';
import './App.css';
import Card from "./Card"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      // followers: {}
    };
  } 

  componentDidMount() {
    axios.get('https://api.github.com/users/saljahmi')
      .then(res=> {
        console.log(res)
        this.setState({
          user: res.data
        })
        console.log(this.state)
      })
      .catch(err => console.log(err))
  }

  // componentDidUpdate

  // handleChanges = e => {
  //   this.setState({
  //     user: e.target.value
  //   });
  // };

  fetchFollowers () {
    axios.get('https://api.github.com/users/saljahmi/followers')
    .then(res=> {
      console.log(res)
      // this.setState({
      //   followers: res
      // })
    })
    .catch(err => {
      console.log(err)
    })  
  }



  render() {
    return(
      <div className = "App">
        <h1>Github User Card</h1>
        <Card 
          user = {this.state.user}
        />
      </div>
    )
  }

}

export default App;
