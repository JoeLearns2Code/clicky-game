import React, { Component } from 'react';
import './App.css';
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";

class App extends Component {

  state = {
    characters
  };

  render() {
    return (
      <Wrapper>
        <Title>Final Fantasy VII</Title>
        {this.state.characters.map(character => (
        <CharacterCard
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
