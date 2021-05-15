import React, { Component } from 'react';

//Class Based Componenet
class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    render() {
        return (
        <div className="search-bar">
            <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
            <hr/>

        </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchChange(term);
    }
}

//export the all data of this file
export default SearchBar;