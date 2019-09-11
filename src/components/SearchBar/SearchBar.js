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
        this.handleTermChange=this.handleTermChange.bind(this);
        this.handleLocationChange=this.handleLocationChange.bind(this);
        this.handleSearch=this.handleSearch.bind(this);
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

    handleTermChange(event){
        this.setState({
            term: event.target.value
        });
    };

    handleLocationChange(event){
        this.setState({
            location: event.target.value
        });
    };

    handleSearch(event){
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault(); /* Prevents the (anchor tag) default of clicking a link at the end of a method */
    }

    /*Creates List Items Needed to Display the Sorting Options*/
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            
            /*sortByOption = the sortByOptions keys*/
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return (<li 
                    key={sortByOptionValue} 
                    className={this.getSortByClass(sortByOptionValue)} 
                    onClick={this.handleSortByChange.bind(this,sortByOptionValue)}>
                        {sortByOption}
            </li>);
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
                <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
                <input placeholder="Where?" onChange={this.handleLocationChange}/>
            </div>
            <div className="SearchBar-submit">
                <a href="www.#.com" onClick={this.handleSearch}>Let's Go</a>
            </div>
            </div>
        );
    };
};


export default SearchBar;

