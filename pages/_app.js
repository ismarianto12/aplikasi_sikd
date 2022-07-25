import '../styles/globals.css'
import { configureStore } from "@reduxjs/toolkit"
import { connect, Provider } from "react-redux"
import userReducer from '../actions/Users'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/css/AdminLTE.min.css'
import { productReducer } from '../actions/Product'

function MyApp({ Component, pageProps }) {
  const store = configureStore({
    reducer: {
      users: userReducer,
      products: productReducer
    }
  });

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>

  )
}

export default MyApp
