import React from 'react';
// importing react library to have an access.
// React is core library that knows how to work with componentns and how to nest them.
import ReactDOM from 'react-dom';
// We also need ReactDOM library.
// This library will render the component to DOM; So this library takes the component and insert the components into the DOM.
import YTSearch from 'youtube-api-search';
import VideoList from './components/video-list-box';
import SearchBar from './components/search-bar';
import VideoDetail from './components/video-details';

const API_KEY = 'AIzaSyCXfrsfw7nOZXBfP9mCFdUXYFtw6rdW_Pw';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: '안녕'}, (searchedVideos) => {
      this.setState({
         videos: searchedVideos,
         selectedVideo: searchedVideos[0]
       });
      // search is done when the callback function is called. Then, update the state with returned data
    });
  }

  render () {
    return (
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos1={this.state.videos}
          onVideoClick={(selectedVideo)=>{this.setState({selectedVideo: selectedVideo})}}
        />
      </div>
      // passing props to children element
    );
  }
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
