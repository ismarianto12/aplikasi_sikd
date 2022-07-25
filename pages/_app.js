import '../styles/globals.css'
import { configureStore } from "@reduxjs/toolkit"
import { connect, Provider } from "react-redux"
import userReducer from '../actions/Users'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  const store = configureStore({
    reducer: {
      users: userReducer,
    }
  });

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>

  )
}

export default MyApp
