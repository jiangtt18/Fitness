import React, { Component } from 'react';
import Breakfast from './Breakfast'
import Lunch from './Lunch'
import Dinner from './Dinner'
import Snack from './Snack'

class Log extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const {breakfast, lunch, dinner, snack} = this.props;
    return(
      <div>
          <Breakfast rows={breakfast} title={'Breakfast'}/>
          <Lunch rows={lunch} title={'Lunch'}/>
          <Dinner rows={dinner} title={'Dinner'} />
          <Snack rows={snack} title={'Snack'}/>
      </div>
    )
  }
}

Log.defaultProps={
  breakfast:
    [{name:'pancake', amount: 1, unit: 'slice', calories: 60, carbs: 18, proteins: 3, fats: 0,     sugar:2, sodium:1
    }],
  lunch:
    [{name:'pancake', amount: 1, unit: 'slice', calories: 60, carbs: 18, proteins: 3, fats: 0,     sugar:2, sodium:1
    }],
  dinner:
    [{name:'pancake', amount: 1, unit: 'slice', calories: 60, carbs: 18, proteins: 3, fats: 0,     sugar:2, sodium:1
    }],
  snack:
    [{
      name: 'pancake', amount: 1, unit: 'slice', calories: 60, carbs: 18, proteins: 3, fats: 0, sugar: 2, sodium: 1
    }]
};

export default Log;