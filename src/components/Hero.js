import React from 'react';

class Hero extends React.Component {

    render() {

        return (
            <div id="banner" className="d-flex justify-content-center align-items-center">
                <img src={this.props.bannerImg} alt="banner Image" />
                <div className="container">
                    <div className="row justify-content-center">
                        <h1 className="text-white">{this.props.caption}</h1>
                        <span className="text-white">{this.props.info}</span>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default Hero;