import React from 'react';
import Options from './Options';

function Features(props) {
  return Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;

    return (
      <fieldset className="feature" key={featureHash}>

        <legend className="feature__name">

          <h3>{feature}</h3>

        </legend>

        <Options 
        feature={this.props.feature} 
        format={this.props.format} 
        options={this.props.features[feature]} 
        selected={this.props.selected} 
        updateFeature={this.props.updateFeature} />
        
      </fieldset>
    );
  });
};

export default Features;
