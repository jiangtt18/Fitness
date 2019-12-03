import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import filter from 'lodash/filter'
import Card from './Card/Card'
import CardSection from './Card/CardSection/CardSection'
import Summary from './Summary/Summary'
import IntakeBreakdown from "./IntakeBreakdown/IntakeBreakdown";
import Log from './Log/Log'
import DeletionConfirmationModal from './Modal/DeletionConfirmationModal'

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
    this.setState({showDeletionModal: true, removingType:type.toLowerCase(), removingItemId: itemId, removingItemName:removingItemName})
  };

  onDeletionConfirmation=() =>{
      const {removingType, removingItemId} = this.state;
      let data = this.state[removingType]
      let updated = filter(data, (o) => o.id !== removingItemId )
      this.setState({[removingType]: updated})
      this.onClose();
  };

  onClose=()=>{
    this.setState({showDeletionModal: false, removingItemId:'', removingType:'', removingItemName:''})
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
        <DeletionConfirmationModal
          removingType={removingType}
          removingItemName={removingItemName}
          showDeletionModal={showDeletionModal}
          onConfirm={this.onDeletionConfirmation}
          onHide={this.onClose}
        />
      </Jumbotron>
    )
  }
}


export default Fitness;