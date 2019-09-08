import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business'; /*Importing the Business Component*/

class BusinessList extends React.Component {
    render(){
        return(
            <div className="BusinessList">
            {/* Iterate through array and return Business components */}
            {
                this.props.businesses.map(business => {
                    return <Business business={business} key={business.id}/>;
                })
            };
          </div>
        );
    };
};

export default BusinessList;