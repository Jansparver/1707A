import React from 'react';
import config from './router/router.config'
import RouterView from './router/RouterView'
import {BrowserRouter} from 'react-router-dom'
import store from './store/store'
import {Provider} from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <RouterView routes={config.routes}/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
