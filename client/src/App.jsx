import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';
import {Card} from 'semantic-ui-react';
import PlayerCard from './PlayerCard';
import NavBar from './NavBar';
import ResponsiveBar from './Chart';

class App extends React.Component {

  state = {
    players:[]
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/api/players')
      // .then(res => res.json())
      .then(res => {
//         console.log(res);
//         console.log(res.data);
        this.setState({players: res.data});
        // console.log(this.state.players);
      })
      .catch(err => console.log(err));
  }


  render(){
    return (
      <div className='App'>
        <NavBar />
        <div className='chart-container'>
                <h2>Players Ranked By Searches</h2>
                <ResponsiveBar players={this.state.players} />
        </div>

        <h1 className='title'>
          Players
        </h1>
        <Card.Group>
          {this.state.players.map( player => (
            <PlayerCard player={player} key={player.id}/>
          ))}
        </Card.Group>
      </div>
    );
  }
}

export default App

