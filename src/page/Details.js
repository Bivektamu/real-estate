import React from 'react';
import {connect} from 'react-redux';
import {fetchProperties} from '../action';

class Details extends React.Component {
    componentDidMount() {
        this.props.fetchProperties();
    }
    render() {
        if(!this.props.property) {
            return ('Loading');
        }
        console.log(this.props.property);
        const {title, address, price, size, bed, bath, img, info} = this.props.property;
        console.log(info.includes(""));

        return (
            <main id="main" className="property-details">
                <section id="details" className="container">
                    <div className="row mb-3">
                        <div className="col-12 col-md-8">
                            <h3 className="white">{title}</h3>
                        </div>
                        <div className="col-12 col-md-4">
                            <h3 className="red text-right">${price}k</h3>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-12 col-md-8">
                            <span className="grey"><i class="fa fa-map-marker-alt"></i>&nbsp;{address}</span>
                        </div>
                        <div className="col-12 col-md-4 text-right">
                            <a href="tel:+61xxxxxxxxxxx" className="tel" >+61 XXX XXX XXX</a>
                        </div>
                    </div>

                    <div className="row mb-5 pb-3">
                        <div className="col-9 col-md-4 col-lg-3">
                            <div className="row">
                                <div className="col-4">
                                    <i class="fs1rem orange fa fa-cube"></i><br />
                                    <span className="white">{size}</span>
                                </div>
                                <div className="col-4">
                                    <i class="fs1rem orange fa fa-bed"></i><br />
                                    <span className="white">{bed} Bed</span>
                                </div>
                                <div className="col-4">
                                    <i class="fs1rem orange fa fa-bath"></i><br />
                                    <span className="white">{bath} Bath</span>
                                </div>
                                </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="container">
                            <img src={img} alt={title} className="container-fluid" />
                            <article className="px-5 ">
                                <h5 className="mt-5 mb-4">Description</h5>
                                <p>{info}</p>
                            </article>


                        </div>
                    </div>


                </section>
            </main>

        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return {property: state.properties[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchProperties})(Details);