import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import filter from 'lodash/filter'
import Card from './Card/Card'
import CardSection from './Card/CardSection/CardSection'
import Summary from './Summary/Summary'
import IntakeBreakdown from "./IntakeBreakdown/IntakeBreakdown";
import Log from './Log/Log'
import DeletionConfirmationModal from './Modal/DeletionConfirmationModal'
import AddItemModal from './Modal/AddItemModal'

class Fitness extends Component {
 constructor(props){
   super(props);

   this.state={
     showDeletionModal:false,
     showAddItemModal:false,
     removingItemId: '',
     removingType: '',
     removingItemName:'',
     addItemName:'',
     AddingType:'',
     AddCalorie:0,
     AddCarb:0,
     AddProtein:0,
     AddFat:0,
     AddSodium:0,
     AddSugar:0,
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

  openAddItem = (e,type) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({showAddItemModal:true, AddingType:type.toLowerCase()})
  };

  openDeleteConfirmation = (e,type,itemId) => {
    e.preventDefault();
    e.stopPropagation();
    let removingItemName = this.state[type.toLowerCase()][itemId]['name'] || '';
    this.setState({showDeletionModal: true, removingType:type.toLowerCase(), removingItemId: itemId, removingItemName:removingItemName})
  };

  onDeletionConfirmation = () => {
      const {removingType, removingItemId} = this.state;
      let data = this.state[removingType]
      let updated = filter(data, (o) => o.id !== removingItemId )
      this.setState({[removingType]: updated})
      this.onClose();
  };

  onDeletionModalClose = () => {
    this.setState({showDeletionModal: false, removingItemId:'', removingType:'', removingItemName:''})
  };

  onAddItemModalClose = () => {
     this.setState({
       showAddItemModal:false,
       addItemName: '',
       AddingType: '',
       AddCalorie: 0,
       AddCarb: 0,
       AddProtein: 0,
       AddFat: 0,
       AddSodium: 0,
       AddSugar: 0,
     })
  };

  onnAddItem = () => {
      const {
        addItemName,
        AddingType,
        AddCalorie,
        AddCarb,
        AddProtein,
        AddFat,
        AddSodium,
        AddSugar
      } = this.state;
     let data = this.state[AddingType];
     let ids =  Object.keys(data).map((s) =>(parseInt(s)));
     let tempId = Math.max(...ids) + 1;
     let updated = Object.assign( data,{[tempId]:{id: tempId, name:addItemName, calories:AddCalorie, carbs:AddCarb, proteins:AddProtein, fats:AddFat,
       sodium:AddSodium, sugar:AddSugar}});
    this.setState({[AddingType] : updated})
  };

  onChange = (e) => {
    let name = e.target.name ;
    let value= e.target.value;
    this.setState({[name]:value})
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
          show={showDeletionModal}
          onConfirm={this.onDeletionConfirmation}
          onHide={this.onDeletionModalClose}
        />
        <AddItemModal
          show={showAddItemModal}
          onConfirm={this.onnAddItem}
          onHide={this.onAddItemModalClose}
          onChange={this.onChange}
        />
      </Jumbotron>
    )
  }
}


export default Fitness;