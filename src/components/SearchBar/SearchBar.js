import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = { /*initial state of SearchBar*/
            term:'',
            location:'',
            sortBy:'best-match'
        }; 
        /*Using Yelp API*/
        this.sortByOptions = {
            'Best Match': 'best_match', /*The Default*/
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };
    }

    /* Provides visual feedback to users */
    getSortByClass(sortByOption){
        if(this.state.sortBy === sortByOption){
            return 'active';
        }
        else{
            return '';
        }
    };

    handleSortByChange(sortByOption){
        this.setState({
            sortBy: sortByOption
        });
    };

    handleTermChange(e){
        this.setState({
            term: event.target.value
        });
    };

    handleLocationChange(e){
        this.setState({
            location: event.target.value
        });
    };

    /*Creates List Items Needed to Display the Sorting Options*/
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            
            /*sortByOption = the sortByOptions keys*/
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this,sortByOptionValue)}>{sortByOption}</li>;
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

