import React from 'react';
import axios from 'axios';
import './App.css';
import Card from "./Card"
import Followers from "./Followers"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: 'saljahmi',
      user: {},
      followers: [],
    };
  } 

  setUser(username){
    axios.get(`https://api.github.com/users/${username}`)
      .then(res=> {
        console.log(res)
        this.setState({
          user: res.data,
        })
      })
      .catch(err => console.log(err))
    axios.get(`https://api.github.com/users/${username}/followers`)
      .then(res => {
        console.log(res)
        this.setState({
          followers: res.data,
        })
        console.log(this.state)
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.setUser(this.state.username)
  }

  render() {
    return(
      <div className = "App">
        <h1>Github User Card</h1>
        <Card 
          user = {this.state.user}
        />
        <Followers
          user = {this.state.user}
          followers = {this.state.followers}
        />

      </div>
    )
  }

}

export default App;
