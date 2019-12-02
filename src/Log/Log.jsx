import React, { Component } from 'react';
import Breakfast from './Breakfast'
import Lunch from './Lunch'
import Dinner from './Dinner'
import Snack from './Snack'
import styles from './Log.module.css'

class Log extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const {breakfast, lunch, dinner, snack, handlers} = this.props;
    return(
      <div className={styles.log}>
          <Breakfast rows={breakfast} title={'Breakfast'} handlers={handlers}/>
          <Lunch rows={lunch} title={'Lunch'} handlers={handlers}/>
          <Dinner rows={dinner} title={'Dinner'} handlers={handlers}/>
          <Snack rows={snack} title={'Snack'} handlers={handlers}/>
      </div>
    )
  }
}


export default Log;