import React from 'react';

// const SearchBar = () => {
//   return <input/>;
// }

// this is a functional component.

// whenever you want a component to have some type of internal record keeping, we need to use class-based component.

// because users are going to type into this input,the component really needs to have some ability to introspect itself. "Hey the user just typed something!"

class SearchBar extends React.Component {

  // Initializing the state object -> create constructor method
  // constructor is the first and only function called automatically whenever a new instance of the class is created.
  constructor(props) {
    super(props);
    // React.component itself has its own constructor.
    // When we define a method that is already defined on the parent class, we can call that parent method by calling 'super'.
    this.state = { term: '' };
    // whenever the user updates the search input, this property is the on that we should update or record the change.
  }
  // State in React is a plain JS object that is used to record and react to user events. Each class based component has its own state object.
  // whenever component state is changed, the component immediately re-renders and forces all of its children to render as well.
  // so, if SearchBar had some states and it changed, the render function would be re-rendered.
  render() {
    return (
      <div>
        <input
          value = {this.state.term}
          // this makes a controlled component
          // we are getting data from a state, not from the form.
          onChange = {(event)=> this.setState({term: event.target.value })}
        />
      </div>
      // Recap: so when we update the input element, event handler function is called then we set the state and record the new value of input.
    );
  } // every React component that are class-based needs render method.
}

// Recap: We defined a new class called SearchBar and give it an access to all of the funcionality that React.Component has.
// In other words, it gives our search bar a bunch of functionality from the React.Component Class.

// Previously our search bar was a functional component. It was function expression that we can call and it would return some plain JSX.
// Since this does not have any ability to communicate with other components, we decided promote from functional component to class-based component.
export default SearchBar;
