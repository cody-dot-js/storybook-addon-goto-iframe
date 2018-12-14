import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import panelStyle, { centeredStyle, descriptionStyle } from './PanelStyles';

const propTypes = {
  api: PropTypes.shape({
    onStory: PropTypes.func,
  }).isRequired,
};

class Panel extends Component {
  static propTypes = propTypes;

  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };
  }

  componentDidMount() {
    const { api: { onStory } } = this.props;
    onStory((kind, story) => this.updateUrl(kind, story));
  }

  componentWillUnmount() {
    this.setState({ url: '' });
  }

  updateUrl = (storyPath, storyName) => {
    const selectedKind = storyPath.replace(/\//g, '%2F');
    const selectedStory = storyName.replace(/ /g, '%20');
    const url = `iframe.html?selectedKind=${selectedKind}&selectedStory=${selectedStory}`

    this.setState({ url });
  }

  render() {
    const { url } = this.state;

    return (
      <div style={panelStyle}>
        <p>Use this addon to navigate to the selected story's iframe.</p>
        <p style={descriptionStyle}>This is useful for testing accessibility (the Storybook UI has WCAG/508 violations) or when you need a larger window size than Storybook allows for.</p>
        <div style={centeredStyle}>
          <Button href={url}>Go to Story Iframe</Button>
        </div>
      </div>
    );
  }
}

export default Panel;
