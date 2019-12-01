import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SummaryTable from './SummaryTable';
import SummaryProgress from './SummaryProgress'
import styles from './Summary.module.css';

class Summary extends Component {
  render(){
    const {exercise, eaten, goal} = this.props;
    const remaining = goal - exercise - eaten;
    return(
      <div className={styles.summary}>
        <SummaryTable {...this.props}/>
        <SummaryProgress remaining={remaining} goal={goal}/>
      </div>
    )

  }
}

Summary.defaultProps = {
  exercise:31,
  eaten: 350,
  goal: 1758,
};

Summary.propTypes = {
  exercise:PropTypes.number,
  eaten: PropTypes.number,
  goal: PropTypes.number,
};

export default Summary;