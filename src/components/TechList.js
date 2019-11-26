import React, { Component } from 'react';
import TechItem from './TechItem';

export default class TechList extends Component {
  state = {
    newTech: '',
    techs: []
  }

  componentDidMount() {
    const savedTechs = JSON.parse(localStorage.getItem('savedTechs'));
    this.setState({ techs: savedTechs });
  }

  componentDidUpdate(prevProps, prevState) {
    const { techs: prevTechs } = prevState;
    const { techs } = this.state;

    if (prevTechs === techs) return;

    localStorage.setItem('savedTechs', JSON.stringify(techs));
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
        <h1>Almost a todo list</h1>
        <p>Write and press ENTER</p>
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
