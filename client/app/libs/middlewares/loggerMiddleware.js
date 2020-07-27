export default function logger({ getState }) {
  return (next) => (action) => {
    if (process.env.NODE_ENV !== 'development') {
      return next(action);
    }

    console.log('will dispatch', action);

    const result = next(action);

    const state = getState();
    const readableState = {};

    Object.keys(state).forEach((storeItem) => {
      readableState[storeItem] = state[storeItem].toJS
        ? state[storeItem].toJS()
        : state[storeItem];
    });

    console.log('state after dispatch', readableState);

    return result;
  };
}
