import React from 'react';
import PropTypes from 'prop-types';
import IntakeTable from './IntakeTable';
import styles from './IntakeBreakdown.module.css';

const IntakeBreakdown = (props) => (<div className={styles.intake}><IntakeTable {...props} /></div>);

IntakeBreakdown.defaultProps = {
  goals:{carbohydrates: 300, proteins: 56, fats: 50, sodium: 2.3, sugar: 40}
};

IntakeBreakdown.propTypes = {
  carbohydrates: PropTypes.number,
  proteins: PropTypes.number,
  fats: PropTypes.number,
  sodium: PropTypes.number,
  sugar: PropTypes.number,
  goals: PropTypes.object
};

export default IntakeBreakdown;