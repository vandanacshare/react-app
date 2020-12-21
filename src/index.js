import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
class ShoppingList extends React.Component {
  render(){
    return(
      <div classname= "shopping-list">
        <h1> Shopping list for {this.props.name} </h1>
        <ul>
          <li> Instagram </li>
          <li> WhatsApp </li>
        </ul>
      </div>
    );
  }
} */