import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BaseComponent from 'libs/components/BaseComponent';
import NavigationBar from '../components/NavigationBar/NavigationBar';

function stateToProps(state) {
  if (state.$$commentsStore) {
    return {
      pathname: state.railsContext.pathname,
    };
  }
  return { };
}

class NavigationBarContainer extends BaseComponent {
    static propTypes ={
      pathname: PropTypes.string.isRequired,
    };

    render() {
      const { pathname } = this.props;

      return (
        <NavigationBar {...{ pathname }} />
      );
    }
}

export default connect(stateToProps)(NavigationBarContainer);
