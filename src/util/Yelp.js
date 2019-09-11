import SearchBar from "../components/SearchBar/SearchBar";

const apiKey = 'k__fzdZrt0jSWpP5hcGXRL_QSPOCvaOxYylX1_mwmYvZqFUvgx_lhICi4h7M0bUlsiFQRwVmVTuqTf36TmoETQ-33bvUTlV_Mx1tq_P1z7WFLyz4aM5tbP_Mzb5vXXYx';

let Yelp = {
    search(term, location, sortBy) {
        /*CORS Anywhere - bypasses CORS restrictions */
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}` /*Form of Identification; API key used as browser header */
            }
        })
        .then(response => {
            return response.json(); /*Returning returned response to JSON */
        })
        .then(jsonResponse => {
            if (jsonResponse.businesses){
                return jsonResponse.businesses.map(business => {
                    return {
                        /* Found in Yelp API /businesses/search */
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                });
            } else{

            }
        }); 
    }
};

export default Yelp;