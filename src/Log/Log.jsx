import React, { Component } from 'react';
import Breakfast from './Breakfast'
import Lunch from './Lunch'
import Dinner from './Dinner'
import Snack from './Snack'

class Log extends Component {
  constructor(props){
    super(props);
    this.state = {
      breakfast: [],
      lunch: [],
      dinner: [],
      snack: []
    }
  }

  render(){
    const {breakfast, lunch, dinner, snack} = this.state;
    return(
      <div>
          <Breakfast breakfast={breakfast}/>
          <Lunch lunch={lunch}/>
          <Dinner dinner={dinner} />
          <Snack snack={snack} />
      </div>
    )

  }
}
export default Log;