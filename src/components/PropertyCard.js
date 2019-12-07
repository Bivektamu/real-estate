import React from 'react';
import {Link} from 'react-router-dom';
const PropertyCard = (props) => {
    const {id, img, title, price, location, size, bed, bath, status} = props.property;
    return (

        <div className="col-12 col-md-6 col-lg-4 my-3">
            <div className="card">
                <div className="img-container">
                    <span className="status" id={status}>For {status}</span>
                    <img className="card-img-top"   src={img} alt={title} />
                </div>

                <div className="card-footer d-flex justify-content-center flex-column">
                    <div className="px-3">
                    <Link to={`/details/${id}`} className="links">
                        <p className="my-3">{title}</p>
                    </Link>
                        <p className="location"><i className="fa fa-map-marker-alt"></i>&nbsp;{location}</p>
                        <p className="price">From ${price}k</p>
                    </div>
                    <div className="container-fluid border-top">
                        <div className="row px-3">
                            <p className="mx-auto my-2 col-4"><i className="fa fa-cube"></i>&nbsp;{size}</p>
                            <p className="mx-auto my-2 col-4"><i className="fa fa-bed"></i>&nbsp;{bed}</p>
                            <p className="mx-auto my-2 col-4"><i className="fa fa-bath"></i>&nbsp;{bath}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard;