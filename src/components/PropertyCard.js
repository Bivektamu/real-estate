import React from 'react';
import {Link} from 'react-router-dom';
const PropertyCard = (props) => {
    console.log(props.property);
    const {id, img, title, price} = props.property;
    return (
            <div className="card">
                <div className="img-container p-5">
                    <Link to={`/property/${id}`} className="">
                        <img className="card-img-top"   src={img} alt={title} />
                    </Link>
                </div>

                <div className="card-footer d-flex justify-content-center flex-column">
                    <h5 className=" text-center text-blue my-3">{title}</h5>
                    <div className="d-flex justify-content-between align-items-baseline mb-3">
                        <p className=" mb-0">${price}</p>
                       
                    </div>
                    
                </div>

            </div>

    )
}

export default PropertyCard;