import React from 'react';


class CountIncrementer extends React.PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        console.log('<CountIncrementer /> re-renders')
        return(
            <div id={`count-incr-${this.props.id}`}>
                <button onClick={this.props.handler}>{`Incrementing button ${this.props.id}`}</button>
            </div>
        )
    }
}

export default CountIncrementer