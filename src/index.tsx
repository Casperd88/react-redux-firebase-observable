import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider as StoreProvider } from 'react-redux'
import { initSystem } from './store/system/actions'
import store from './store'

ReactDOM.render(
  (
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  ),
  document.getElementById('root')
)

store.dispatch(initSystem())
