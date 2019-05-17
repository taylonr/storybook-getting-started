import React from 'react';
import PropTypes from 'prop-types';
import addons from '@storybook/addons';
import { STORY_CHANGED } from '@storybook/core-events';

class SeeAlsoPanel extends React.Component {
  state = { seeAlso: {} };

  componentDidMount() {
    const { api } = this.props;
    api.on('pluralsightSeeAlso/storySelected', this.setData);
    api.on(STORY_CHANGED, this.clearState);
  }

  componentWillUnmount() {
    const { api } = this.props;
    api.off('pluralsightSeeAlso/storySelected', this.setData);
  }

  setData = (seeAlso) => {
    this.setState({ seeAlso });
  };

  clearState = () => {
    this.setState({ seeAlso: null });
  }

  render() {
    const {api} = this.props;
    const { seeAlso } = this.state;
    return seeAlso ? (
      <a onClick={() => api.selectStory(seeAlso.story)}
          style={{ paddingLeft: '20px', cursor: 'pointer' }}>
            {seeAlso.label}
          </a>
    ) : null;
  }
}

SeeAlsoPanel.propTypes = {
  api: PropTypes.object.isRequired,
};

// Register the addon with a unique name.
addons.register('SEEALSO', (api) => {
  addons.addPanel('SEEALSO/panel', {
    title: 'See Also',
    render: ({ key }) => <SeeAlsoPanel key={key} api={api} />,
  });
});
