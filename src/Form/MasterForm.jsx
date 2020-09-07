import React from 'react';
import Features from './Features';

function MasterForm(props) {
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <Features 
            features={this.props.features} 
            format={this.props.format} 
            selected={this.state.selected} 
            updateFeature={this.props.updateFeature} 
            />
        </form>
    );
};

export default MasterForm;
