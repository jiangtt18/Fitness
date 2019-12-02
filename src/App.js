import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from './Card/Card'
import CardSection from './Card/CardSection/CardSection'
import Summary from './Summary/Summary'
import IntakeBreakdown from "./IntakeBreakdown/IntakeBreakdown";

class Fitness extends Component {

  render(){
    return(
      <Jumbotron fluid>
        <Card>
          <CardSection>
            <Summary/>
            <IntakeBreakdown/>
          </CardSection>
        </Card>
      </Jumbotron>
    )
  }
}
export default Fitness;