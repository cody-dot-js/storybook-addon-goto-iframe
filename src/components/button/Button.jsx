import React, { Component } from 'react';
import PropTypes from 'prop-types';
import buttonStyle, { hoverButtonStyle } from './ButtonStyles';

const propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

class Button extends Component {
  static propTypes = propTypes;

  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    }
  }

  toggleHover = () => {
    this.setState(({ isHovered }) => ({ isHovered: !isHovered }));
  }

  render() {
    const { href, children } = this.props;

    const hoveredStyle = this.state.isHovered ? hoverButtonStyle : {};

    const style = {
      ...buttonStyle,
      ...hoveredStyle,
    };

    return (
      <a href={href} style={style} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        {children}
      </a>
    );
  }
}

export default Button;
