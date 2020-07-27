import React from 'react';
import ReactOnRails from 'react-on-rails';
import { Provider } from 'react-redux';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import NavigationBarContainer from '../containers/NavigationBarContainer';
import * as paths from '../constants/paths';

export default (_props, railsContext) => {
  const { pathname } = railsContext;

  let store;
  if (pathname === paths.ROUTER_PATH) {
    store = ReactOnRails.getStore('routerCommentsStore', false);
  } else if (pathname === paths.NO_ROUTER_PATH) {
    store = ReactOnRails.getStore('commentsStore', false);
  } else {
    return (
      <NavigationBar {...{ pathname }} />
    );
  }

  return (
    <Provider store={store}>
      <NavigationBarContainer />
    </Provider>
  );
};
