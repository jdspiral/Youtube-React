import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyCKCBWWSMuelxuAHSh4l7x2oNSyNzq2I78';

    return (
        <div>
            <SearchBar />
        </div>
    );
class App extends Component {
}

ReactDOM.render(<App />, document.querySelector('.container'));