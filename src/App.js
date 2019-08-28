import React, {Component} from 'react';
import './App.css';
import Navbar from './components/navbar';
import Counters from "./components/Counters";

/*class App extends Component{

  
  
  );
}

export default App;
*/
class App extends Component {
    state = {
      counter: [
          {id:1, value:4},
          {id:2, value:0},
          {id:3, value:0},
          {id:4, value:0},
          {id:5, value:0}
      ]
    }
  
    handleDelete= (counterId)=>{
     const counter= this.state.counter.filter(s=>s.id!==counterId);
     this.setState({counter:counter})
    }
  
    handleIncrement=(counterr)=>{
      const counter = [...this.state.counter]
      const index = counter.indexOf(counterr);
      counter[index]={...counterr}
      counter[index].value++;
      this.setState({ counter });
  
  } 
  
    handleReset= ()=>{
        const counter = this.state.counter.map(c=>{
            c.value= 0;
            return c});   
          this.setState({ counter })
          
        }

  render() { 
    return (
      <React.Fragment>
       <Navbar
       totalCount={this.state.counter.filter(c => c.value > 0).length}
       />
       <main className='container'>
         <Counters
         onDelete={this.handleDelete}
         onIncrement={this.handleIncrement}
         onReset={this.handleReset}
         counter={this.state.counter}/>
       </main>
       </React.Fragment>  );
  }
}
 
export default App;