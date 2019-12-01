import React, { Component } from 'react';
import Card from './Card/Card'
import CardTop from './Card/CardTop/CardTop'
import CardBottom from './Card/CardBottom/CardBottom'

class Fitness extends Component {

  render(){
    return(
      <Card>
        <CardTop />
        <CardBottom />
      </Card>
    )
  }
}
export default Fitness;