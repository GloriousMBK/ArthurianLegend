import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer.reducer);

class App extends React.Component {
  constructor (props) {
    super(props);
    store.subscribe(() => this.setState({reload: false}));
    this.state = {};
  }

  componentWillMount () {
    setTimeout(function () {
      store.dispatch(reducer.changeArthur('but he is legend believe it'));
      // window.alert('ARTURRR', store.getState().arthur);
    }, 1500);
  }

  render () {
    return (
      <div>
        <h1>The Arthurian Legends are All True</h1>
        <div>Are they? ...{store.getState().arthur}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));
