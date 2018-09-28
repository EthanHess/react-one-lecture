import React, { Component } from 'react';
import './App.css';

//In React you have to use className, not class
class App extends Component{
  constructor() {
    super(); 
    this.state = {
      name: 'Ethan',
      imageURL: 'https://http.cat/506',
      friends: [{name: 'T$', imageURL: 'https://http.cat/506'}]
    }
    this.updateName = this.updateName.bind(this); //Crashes without this
    this.updateImageURL = this.updateImageURL.bind(this); 
    this.addFriend = this.addFriend.bind(this); 
  }

  updateName(event) {
    this.setState({ 
      name: event.target.value
    }); 
  }

  updateImageURL(event) {
    this.setState({
      imageURL: event.target.value
    })
  }

  addFriend() {
    const newFriend = { name: this.state.name, imageURL: this.state.imageURL }
    const friendsCopy = this.state.friends.slice(); 
    friendsCopy.push(newFriend); 
    this.setState({ friends: friendsCopy, name: '', imageURL: '' })
  }

  //convention is to always have this be the last function in component
  render() {

    // const name = this.state.name; 
    // const imageURL = this.state.imageURL; 

    //OR
    const { name, imageURL, friends } = this.state; 

    return (
      <div>
        <div>Name: <input
         value = {name} 
         onChange={event => this.setState({ name: event.target.value })} //Fancy way
         />
        {name}
        </div>
        <div>Picture URL: <input
         value = {imageURL} 
         onChange={this.updateImageURL} //Old fashioned way
         /> 
        {imageURL}
        </div>
        <button onClick={this.addFriend}>Add friend</button>
        <div>Friends: {friends.map(friend => {
          return <div>
            Name: {friend.name}{' '},
            Image: <img src={friend.imageURL} /> 
          </div>
        })}</div>
      </div>
    )
  }
}

export default App;
