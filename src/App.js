import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from './Card/Card'
import CardTop from './Card/CardTop/CardTop'
import Summary from './Summary/Summary'
import IntakeBreakdown from "./IntakeBreakdown/IntakeBreakdown";

class Fitness extends Component {

  render(){
    return(
      <Jumbotron fluid>
        <Card>
          <CardTop>
            <Summary/>
            <IntakeBreakdown/>
          </CardTop>
        </Card>
      </Jumbotron>
    )
  }
}
export default Fitness;