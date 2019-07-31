import React, { Component } from 'react';
import './App.css';
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import characters from "./characters.json";

class App extends Component {

  state = {
    characters,
    clickedChars: [],
    score: 0,
    topScore: 0
  };

  clickCheck = id => {
    this.state.characters.find((o, i) => {
      if (o.id === id) {
        characters[i].count = characters[i].count + 1;
        this.setState({score: this.state.score +1}, function() {
          console.log(this.state.score);
        });
        this.state.characters.sort(() => Math.random() - 0.5)
        return true;
      } else {
        console.log("bad guess");
      }
    })
  };

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Final Fantasy VII Guessing Game</Header>
        {this.state.characters.map(character => (
        <CharacterCard
          clickCheck={this.clickCheck}
          id={character.id}
          key={character.id}
          name={character.name}
          image={character.image}
        />
        ))}
      </Wrapper>
    );
  }
}


export default App;
