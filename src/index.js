import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from "redux"; //npm install redux --save **store oluşturarak stateleri daha iyi yönetmek**
import thunk from "redux-thunk"; //npm install redux-thunk --save **Servis sağlayıcısından gelen asenkron işlemlerde kullanılması için**
import logger from "redux-logger"; //npm install redux-logger --save **console da yapılan işlemlerin ayrıntılı gösterilmesi
import reduxPromise from "redux-promise-middleware" //npm install redux-promise-middleware --save
import {composeWithDevTools} from "redux-devtools-extension"; //npm install redux-devtools-extension --save **Sayfamız üzerinde Redux DevTools kullanabilmek için (https://github.com/zalmoxisus/redux-devtools-extension)**
import {Provider} from "react-redux"; //npm install react-redux --save **Redux'ı React'te kullanabilmek için**
import {BrowserRouter} from "react-router-dom"; //npm install react-router-dom --save **sayfamızdaki linkleri oluşturup bunları belirli yerlere routelamak için**
// npm install react-spinners --save **Çok farklı kaliteli loading içerikleri
// npm install semantic-ui-react **çok çeşitli ui lar
import rootReducer from "./reducers/rootReducer";


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(reduxPromise, thunk, logger)
    )
)

ReactDOM.render(

    <App />
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
