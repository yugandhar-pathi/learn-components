import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './App';
import reportWebVitals from './reportWebVitals';
import {
  RouterProvider,
} from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {Provider} from 'react-redux'
import Store from '../src/Store'

i18n
.use(initReactI18next)
.init({
    resources:{
      en:{
        translation:{
          "Welcome to React": "Welcome to react and react-i18next",
          "Welcome_Home": "Welcome Kalyani!!",
          "logout" : "Logout",
          "username" : "User Name :",
          "password" : "Password :",
          "username_placeholder" : "Enter Your User Name Here",
          "password_placeholder" : "Enter Your Password Here",
        }
      }
    },

    lng: "en"
})
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
  <RouterProvider router={router} />
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
