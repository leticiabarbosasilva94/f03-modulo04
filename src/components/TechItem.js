import React from 'react';
import PropTypes from 'prop-types';

export default function TechItem({ tech, index, handleClick }) {
  return (
    <li>
      {tech}
      <button onClick={(e) => handleClick(e, index)} type="button">Apagar</button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Mano, que doidera',
  index: 22,
};

TechItem.propTypes = {
  tech: PropTypes.string,
  index: PropTypes.number,
  handleClick: PropTypes.func.isRequired
};
