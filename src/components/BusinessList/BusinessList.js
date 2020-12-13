import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business'; /*Importing the Business Component*/

class BusinessList extends React.Component {
    render(){
        return( /* Iterate through array and return Business components */
            <div className="BusinessList">
            {
                this.props.businesses.map(business => {
                    return <Business business={business} key={business.id}/>;
                })
            }
            </div>
        );
    }
}

export default BusinessList;