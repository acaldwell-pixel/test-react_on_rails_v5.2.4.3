import 'bootstrap-loader';
import 'jquery-ujs';
import ReactOnRails from 'react-on-rails';

import App from '../bundles/comments/startup/App';
import NavigationBarApp from '../bundles/comments/startup/NavigationBarApp';
import commentsStore from '../bundles/comments/store/commentsStore';
import routerCommentsStore from '../bundles/comments/store/routerCommentsStore';

ReactOnRails.setOptions({
  traceTurbolinks: true,
});

ReactOnRails.register({
  App,
  NavigationBarApp,
});

ReactOnRails.registerStore({
  routerCommentsStore,
  commentsStore,
});
