import React from 'react';
import Breakfast from './Breakfast'
import Lunch from './Lunch'
import Dinner from './Dinner'
import Snack from './Snack'
import styles from './Log.module.css'
import Table from 'react-bootstrap/Table';

const Log = ({breakfast, lunch, dinner, snack, handlers}) => {
  return(
    <div className={styles.log}>
      <Breakfast rows={breakfast} title={'Breakfast'} handlers={handlers}/>
      <Lunch rows={lunch} title={'Lunch'} handlers={handlers}/>
      <Dinner rows={dinner} title={'Dinner'} handlers={handlers}/>
      <Snack rows={snack} title={'Snack'} handlers={handlers}/>
    </div>
  )
};
export default Log;