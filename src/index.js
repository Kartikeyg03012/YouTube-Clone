//Steps to follow to make a react starter project...
//First, create a Component which return some Html
//Second, Take this component's HTML and put into the DOM 

//Import Lib....
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_item_list';
import VideoDetails from './components/video_player';

//youtube API key 
const YOUTUBE_API_KEY = 'AIzaSyDBNaS4w_tSXkdSE7Pc06uE_2e2Dki3fjI';

//First Step
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vedios: [],
            selectedVideo: null
        };
        this.videoSearch('React Js')
    }

    videoSearch(term) {
        //Calling youtube function
        YTSearch({ key: YOUTUBE_API_KEY, term: term }, (vedios) => {
            this.setState({
                vedios: vedios, selectedVideo: vedios[0]
            });
        });
    }


    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)


        return (
            <div>
                <SearchBar onSearchChange={videoSearch} />
                <VideoDetails video={this.state.selectedVideo} />
                <VideoList
                    onVedioSelect={selectedVideo => this.setState({ selectedVideo })}
                    vedios={this.state.vedios} />
            </div>);
    }
}

//First Step in different way...
const Test = () => {
    return <div>I'm a Blockchain Developer</div>;
}

//Second Step
ReactDOM.render(<App />, document.querySelector('.container'));
