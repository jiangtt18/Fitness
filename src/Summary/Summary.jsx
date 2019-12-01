import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SummaryTable from './SummaryTable';
import styles from './Summary.module.css';

class Summary extends Component {
  render(){
    const {exercise, eaten, goal} = this.props;
    return(
      <div className={styles.summary}>
        <SummaryTable {...this.props}/>
      </div>
    )

  }
}

Summary.defaultProps = {
  exercise:'31 kcal',
  eaten: '350 kcal',
  goal: '1758 kcal',
};

export default Summary;