import React, { Component } from 'react';
class Counter extends Component {
    

    render() { 
        return (
            <div>
                <span  className={this.getBadgeClass()}>{this.format()}</span>
            <button onClick={()=>this.props.onIncrement(this.props.counter)} type='submit' className="btn-sm btn btn-primary">Incrementer</button>
            <button onClick={()=>this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">Delete</button>  
            </div>
                     )
    }
    getBadgeClass() {
        let classes = 'badge m-2 badge-';
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    format(){
        let {value}= this.props.counter
      return  value === 0 ? "Zero":value;
    }
}
 
export default Counter;