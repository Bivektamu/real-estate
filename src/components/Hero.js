import React from 'react';

class Hero extends React.Component {

    render() {

        const classes ='d-flex justfy-content-center align-items-center'+' '+this.props.page;
        return (
            <div id="banner" className={classes}>
                <div className="container">
                    <div className="row justify-content-center flex-column">
                        <h1 className="text-white text-center">{this.props.caption}</h1><br />
                        <span className="text-white text-center">{this.props.info}</span>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default Hero;