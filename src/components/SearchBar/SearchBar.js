import React from 'react';
import './SearchBar.css';

/*Using Yelp API*/
const sortByOptions = {
    'Best Match': 'best_match', /*The Default*/
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = { /*initial state of SearchBar*/
            term:'',
            location:'',
            sortBy:'best-match'
        }; 
    }

    /*Creates List Items Needed to Display the Sorting Options*/
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            
            /*sortByOption = the sortByOptions keys*/
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>;
        });
    
    };

    render() {
        return (
            /*Code Generally Given by Codecademy*/
            <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {this.renderSortByOptions()} 
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a href="www.#.com">Let's Go</a>
            </div>
            </div>
        );
    };
};


export default SearchBar;

