import React from 'react';
// importing react library to have an access.
// React is core library that knows how to work with componentns and how to nest them.

import ReactDOM from 'react-dom';
// We also need ReactDOM library.
// This library will render the component to DOM; So this library takes the component and insert the components into the DOM.

import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyCXfrsfw7nOZXBfP9mCFdUXYFtw6rdW_Pw';

const App = () => { // function () is equal to () =>
  return (
    <div>
      <SearchBar/>
    </div>
  );  // purpose of using JSX is its simpliticy. clean, concise and very easy to understand.
}
// Creating a new component. This component should produce HTML elements.

// "const" is ES6 syntax that is similar to var. Both are used to declare variables.
// Only difference is that we are never going to re-assign const value.
// When we declare with const, we are saying that this is the final value of this variable.
// Take this component's generated HTML and put it on the page (in the DOM)

// Now, we are using both JSX and ES6 syntax which maynot be interpreted by browser. Therefore, we need to use webpack and babel
// so that we translate them into actual vanilla JS that can be understood by our browser.

ReactDOM.render(<App />, document.querySelector(".container"));
// ReactDOM.render(App); is wrong because we are passing class component. We need to pass instance of App.
