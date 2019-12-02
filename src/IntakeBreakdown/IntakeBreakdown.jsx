import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IntakeTable from './IntakeTable'
class IntakeBreakdown extends Component {
  render(){
    return(
      <div>
        <IntakeTable {...this.props} />
      </div>
    )

  }
}

IntakeBreakdown.defaultProps = {
  carbohydrates:14,
  proteins: 14,
  fats:21,
  sodium:20,
  sugar:30,
  goals:{carbohydrates: 206,proteins: 56, Fats: 50, sodium: 20, sugar: 40 }
};

IntakeBreakdown.propTypes = {
  carbohydrates: PropTypes.number,
  proteins: PropTypes.number,
  fats:PropTypes.number,
  sodium:PropTypes.number,
  sugar:PropTypes.number,
  goals: PropTypes.object
};

export default IntakeBreakdown;