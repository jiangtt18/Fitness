import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IntakeTable from './IntakeTable';
import styles from './IntakeBreakdown.module.css';

class IntakeBreakdown extends Component {
  render(){
    return(
      <div className={styles.intake}>
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
  goals:{carbohydrates: 20,proteins: 56, fats: 50, sodium: 20, sugar: 40 }
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