import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from './Card/Card'
import CardSection from './Card/CardSection/CardSection'
import Summary from './Summary/Summary'
import IntakeBreakdown from "./IntakeBreakdown/IntakeBreakdown";
import Log from './Log/Log'
import ModalTemplate from './Modal/Modal'

class Fitness extends Component {
 constructor(props){
   super(props);

   this.state={
     showDeletionModal:false,
     showAddItemModal:false,
     removingItemId: '',
     removingType: '',
     removingItemName:'',
      breakfast:{1:{id:1,name:'pancake', amount: 1, unit: 'slice', calories: 60, carbs: 18, proteins: 3, fats: 0, sugar:2, sodium:1
        }},
      lunch:{1:{id:1,name:'pancake', amount: 1, unit: 'slice', calories: 60, carbs: 18, proteins: 3, fats: 0, sugar:2, sodium:1
        }},
      dinner:{1:{id:1,name:'pancake', amount: 1, unit: 'slice', calories: 60, carbs: 18, proteins: 3, fats: 0, sugar:2, sodium:1
        }},
      snack:{1:{id:1,name:'pancake', amount: 1, unit: 'slice', calories: 60, carbs: 18, proteins: 3, fats: 0, sugar:2, sodium:1
        }}
   };

   this.handlers = {
     openAddItem: this.openAddItem,
     openDeleteConfirmation: this.openDeleteConfirmation,
   }
 }

  openAddItem = (type, itemInfo) => {
    console.log('openItem')
    // this.setState({[type]: itemInfo})
  };

  openDeleteConfirmation=(type,itemId) =>{
    let removingItemName = this.state[type.toLowerCase()][itemId]['name'] || '';
    this.setState({showDeletionModal: true, removingType:type, removingItemId: itemId, removingItemName:removingItemName})
  };

  onDeletionConfirmation=() =>{

  };

  onHide=()=>{
    this.setState({showDeletionModal: false, removingItem:'', removingType:''})
  };


  render(){
   const {breakfast, lunch, dinner, snack, removingType, removingItemName, showAddItemModal, showDeletionModal} = this.state;
    return(
      <Jumbotron fluid>
        <Card>
          <CardSection>
            <Summary/>
            <IntakeBreakdown/>
          </CardSection>
          <Log handlers={this.handlers} breakfast={breakfast} lunch={lunch} dinner={dinner} snack={snack}/>
        </Card>
        <ModalTemplate show={showDeletionModal} onConfirm={this.onDeletionConfirmation} confirmText={'Delete'} onHide={this.onHide}>
          {'Are you sure you want to delete '}
          <strong>{removingItemName}</strong>
          {` from ${removingType} ? `}
        </ModalTemplate>
      </Jumbotron>
    )
  }
}


export default Fitness;