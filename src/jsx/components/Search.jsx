import React, { Component } from 'react'
import SearchIcon from "-!svg-react-loader?name=Logo!../../img/search-icon.svg";


export default class Search extends Component {
    render() {
        return (
            <div className="search-container">
            <div class="search">
            <div class="search-input">
            <input type="text" class="search-term" placeholder="Search legal cases" />
            <button type="submit" class="search-button"><SearchIcon /></button>
            </div>
            <button type="submit" class="search-submit-button">Search</button>
            </div>
            </div>
        )
    }
}
