import React, { Component } from 'react';
import Counter from './Counter'
class Counters extends Component {
   
    render() { 
        const {onDelete,onIncrement,onReset,counter}= this.props
                return ( 
            <div>
                <button onClick={onReset} className="btn btn-sm btn-info m-2">Reset</button>
                {counter.map(counter=> <Counter 
                key= {counter.id} 
                counter={counter}
                onDelete={onDelete}
                onIncrement={onIncrement}
                />)}
            </div>
         );
    }
}
 
export default Counters;