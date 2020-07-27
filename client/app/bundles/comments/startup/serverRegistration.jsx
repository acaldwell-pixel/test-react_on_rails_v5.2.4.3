import ReactOnRails from 'react-on-rails';

import App from './App';
import NavigationBarApp from './NavigationBarApp';
import routerCommentsStore from '../store/routerCommentsStore';
import commentsStore from '../store/commentsStore';

ReactOnRails.register(
  {
    App,
    NavigationBarApp,
  },
);

ReactOnRails.registerStore({
  routerCommentsStore,
  commentsStore,
});
