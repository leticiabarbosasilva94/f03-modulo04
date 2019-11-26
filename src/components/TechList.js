import React, { Component } from 'react';
import TechItem from './TechItem';

export default class TechList extends Component {
  state = {
    newTech: 'a',
    techs: ['NodeJS', 'ReactJS', 'React Native']
  }

  handleInputChange = (e) => {
    this.setState({ newTech: e.target.value });
  }

  handleKeyPress = (e) => {
    if (e.keyCode !== 13) return;
    if (!e.target.value) return;

    const { newTech, techs } = this.state;

    if (techs.indexOf(e.target.value) !== -1) return;

    this.setState({ techs: [...techs, newTech], newTech });
  }

  handleClick = (e, index) => {
    const { techs } = this.state;
    const newTechs = [...techs];
    newTechs.splice(index, 1);
    this.setState({ techs: newTechs });
  }

  render() {
    const { techs, newTech } = this.state;

    return (
      <>

        <h1>{newTech}</h1>

        <ul>
          {techs.map((tech, index) => (
            <TechItem
              tech={tech}
              index={index}
              key={tech}
              handleClick={this.handleClick}
            />
          ))}
        </ul>

        <input
          type="text"
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeyPress}
          value={newTech}
        />

      </>
    );
  }
}
