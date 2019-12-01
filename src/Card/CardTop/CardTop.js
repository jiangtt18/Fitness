import React, { Component } from 'react';
import Summary from '../../Summary/Summary'
import IntakeBreakdown from '../../IntakeBreakdown/IntakeBreakdown'


class CardTop extends Component {
    render(){
        return(
            <div>
                <Summary />
                <IntakeBreakdown />
            </div>
        )
    }
}

export default CardTop