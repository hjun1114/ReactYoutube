import React from 'react';

// const SearchBar = () => {
//   return <input/>;
// }

// this is a functional component.

// whenever you want a component to have some type of internal record keeping, we need to use class-based component.

// because users are going to type into this input,our component really needs to have some ability to introspect itself. "Hey the user just typed something!"

class SearchBar extends React.Component {
  render() {
    return <input/>;
  } // every React component that are class-based needs render method.
}
// We defined a new class calles SearchBar and give it an access to all of the funcionality that React.Component has.
// In other words, it gives our search bar a bunch of functionality from the React.Component Class.

// Previously our search bar was a functional component. It was function expression that we can call and it would return some plain JSX.
// Since this does not have any ability to communicate with other components, we decided promote from functional component to class-based component.
export default SearchBar;
