import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import filter from 'lodash/filter';
import Card from './Card/Card';
import CardSection from './Card/CardSection/CardSection';
import Summary from './Summary/Summary';
import IntakeBreakdown from "./IntakeBreakdown/IntakeBreakdown";
import Log from './Log/Log';
import DeletionConfirmationModal from './Modal/DeletionConfirmationModal';
import AddItemModal from './Modal/AddItemModal';

class Fitness extends Component {
 constructor(props){
   super(props);

   this.state = {
     showDeletionModal: false,
     showAddItemModal: false,
     removingItemId: '',
     removingType: '',
     removingItemName:' ',
     addItemName: '',
     AddingType: '',
     AddCalorie: 0,
     AddCarb: 0,
     AddProtein: 0,
     AddFat: 0,
     AddSodium: 0,
     AddSugar: 0,
     exercise: 0,
     eaten: 0,
     goal: 1758,
     carbohydrates: 0,
     proteins: 0,
     fats: 0,
     sodium: 0,
     sugar:0,
     breakfast: {},
     lunch: {},
     dinner: {},
     snack: {},
     errorMessage: ''
   };

   this.handlers = {
     openAddItem: this.openAddItem,
     openDeleteConfirmation: this.openDeleteConfirmation,
   }
 }

  openAddItem = (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({showAddItemModal: true, AddingType: type.toLowerCase()})
  };

  openDeleteConfirmation = (e, type, itemId) => {
    e.preventDefault();
    e.stopPropagation();
    let removingItemName = this.state[type.toLowerCase()][itemId]['name'];
    this.setState(
  {
          showDeletionModal: true,
          removingType:type.toLowerCase(),
          removingItemId: itemId,
          removingItemName:removingItemName
        }
      )
  };

  onDeletionConfirmation = () => {
    const {removingType, removingItemId} = this.state;
    let data = this.state[removingType];
    let updated = filter(data, (o) => o.id !== removingItemId).reduce((accu, cur) => {
      accu[cur.id] = cur;
      return accu
    },{});
    let {calories, carbs, proteins, fats, sodium, sugar} = this.handleNutritionRemove();
    this.setState(
{
        [removingType]: updated,
        eaten: calories,
        carbohydrates:carbs,
        proteins,
        fats,
        sodium,
        sugar,
      }
    );
    this.onDeletionModalClose();
  };

  onDeletionModalClose = () => {
    this.setState({showDeletionModal: false, removingItemId:'', removingType:'', removingItemName:''})
  };

  onAddItem = () => {
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
    if (this.hasError()){
      this.setState({errorMessage: 'Name and Calories fields are required'});
      return;
    }

    let data = this.state[AddingType];
    let ids =  Object.keys(data).map((s) =>(parseInt(s)));
    let tempId = ids.length === 0 ? 0 : Math.max(...ids) + 1;
    let added = {id: tempId, name:addItemName, calories:AddCalorie, carbs:AddCarb, proteins:AddProtein, fats:AddFat,
       sodium:AddSodium, sugar:AddSugar};
    let updated = Object.assign({}, data, {[tempId]:added});
    let {calories, carbs, proteins, fats, sodium, sugar} = this.calcCurrentTotal(added);
    this.setState(
    {
        [AddingType]: updated,
         eaten: calories,
         carbohydrates: carbs,
         proteins,
         fats,
         sodium,
         sugar,
      }
    );
    this.onAddItemModalClose();
  };

  hasError = () => {
    const {addItemName, AddCalorie} = this.state;
    return addItemName.trim() === '' || AddCalorie === 0;
  };

  onAddItemModalClose = () => {
    this.setState(
      {
        showAddItemModal:false,
        addItemName: '',
        AddingType: '',
        AddCalorie: 0,
        AddCarb: 0,
        AddProtein: 0,
        AddFat: 0,
        AddSodium: 0,
        AddSugar: 0,
        errorMessage:''
      }
    )
  };

  onChange = (e) => {
    let name = e.target.name ;
    let value = e.target.value;
    this.setState({[name]: value})
  };

  handleNutritionRemove = () => {
    const {removingType, removingItemId} = this.state;
    let removedData = this.state[removingType][removingItemId];
    const formattedData = Object.keys(removedData).reduce((accu, k) => {
      accu[k] = -removedData[k];
      return accu
    },{});
    return this.calcCurrentTotal(formattedData);
  };

  calcCurrentTotal = (data) => {
    const {breakfast, lunch, dinner, snack} = this.state;
    const total = Object.values(breakfast).concat(Object.values(lunch), Object.values(dinner), Object.values(snack), [data]);
    return total.reduce((accu, cur) => {
      Object.keys(cur).forEach((k) => {
        if (!accu[k]){accu[k] = 0}
        accu[k] += parseInt(cur[k])
      });
      return accu
    }, {})
  };

  render(){
   const {
     breakfast,
     lunch,
     dinner,
     snack,
     removingType,
     removingItemName,
     showAddItemModal,
     showDeletionModal,
     exercise,
     eaten,
     goal,
     carbohydrates,
     proteins,
     fats,
     sodium,
     sugar,
     errorMessage,
   } = this.state;

    return(
      <Jumbotron fluid>
        <Card>
          <CardSection>
            <Summary exercise={exercise} eaten={eaten} goal={goal}/>
            <IntakeBreakdown
              carbohydrates={carbohydrates}
              proteins={proteins}
              fats={fats}
              sodium={sodium}
              sugar={sugar}
            />
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
          onConfirm={this.onAddItem}
          onHide={this.onAddItemModalClose}
          onChange={this.onChange}
          errorMessage={errorMessage}
        />
      </Jumbotron>
    )
  }
}

export default Fitness;