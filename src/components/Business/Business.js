import React from 'react';
import './Business.css';

class Business extends React.Component {
    render(){
        const {business} = this.props;
        return(
        <div className="Business">
            {/* the image(s) that shows up when a search is made */}
            <div className="image-container">
                {/* <img src='https://www.preppywallpapers.com/wp-content/uploads/2017/01/Pantone-2017-Hazelnut-iphone-wallpaper.jpg' alt='businessplace'/> */}
                <img src={business.imageSrc} alt="business_image" />
            </div>
            <h2>{business.name}</h2>
            <div className="Business-information">
                <div className="Business-address">
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state} {business.zipCode}</p>
                </div>
                <div className="Business-reviews">
                    <h3>{business.category}</h3>
                    <h3 className="rating">{business.rating} stars</h3>
                    <p>{business.reviewCount} reviews</p>
                </div>
            </div>
        </div>
        );
    }
};

export default Business;