import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider as StoreProvider } from 'react-redux'
import store from './store'
import FirebaseProvider from './components/FirebaseProvider'

const firebaseConfig = {
  apiKey: "AIzaSyBtInYXRdWfAwie-UnmrUUpyGhsW3P6Ij0",
  authDomain: "vana-98857.firebaseapp.com",
  databaseURL: "https://vana-98857.firebaseio.com",
  projectId: "vana-98857",
  storageBucket: "vana-98857.appspot.com",
  messagingSenderId: "76208259200"
}

ReactDOM.render(
  (
    <StoreProvider store={store}>
      <FirebaseProvider config={firebaseConfig}>
        <App />
      </FirebaseProvider>
    </StoreProvider>
  ),
  document.getElementById('root')
)
