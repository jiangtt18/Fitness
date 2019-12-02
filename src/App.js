import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from './Card/Card'
import CardSection from './Card/CardSection/CardSection'
import Summary from './Summary/Summary'
import IntakeBreakdown from "./IntakeBreakdown/IntakeBreakdown";
import Log from './Log/Log'

class Fitness extends Component {
 constructor(props){
   super(props);

   this.state={
      breakfast:[{name:'pancake', amount: 1, unit: 'slice', calories: 60, carbs: 18, proteins: 3, fats: 0,     sugar:2, sodium:1
      }],
      lunch:[{name:'pancake', amount: 1, unit: 'slice', calories: 60, carbs: 18, proteins: 3, fats: 0,     sugar:2, sodium:1
      }],
      dinner:[{name:'pancake', amount: 1, unit: 'slice', calories: 60, carbs: 18, proteins: 3, fats: 0,     sugar:2, sodium:1
      }],
      snack:[{name:'pancake', amount: 1, unit: 'slice', calories: 60, carbs: 18, proteins: 3, fats: 0,     sugar:2, sodium:1
      }]
   };

   this.onAddItem = this.onAddItem.bind(this);
   this.handlers = {
     onAddItem: this.onAddItem
   }
 }

  onAddItem = (type, itemInfo) => {
    this.setState({[type]: itemInfo})
  };

  render(){
   const {breakfast, lunch, dinner, snack} = this.state;
    return(
      <Jumbotron fluid>
        <Card>
          <CardSection>
            <Summary/>
            <IntakeBreakdown/>
          </CardSection>
          <Log handlers={this.handlers} breakfast={breakfast} lunch={lunch} dinner={dinner} snack={snack}/>
        </Card>
      </Jumbotron>
    )
  }
}


export default Fitness;