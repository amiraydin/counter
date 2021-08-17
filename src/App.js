
import React from 'react';
import './App.css';
import Compter from './compenant/Compter';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }
  // var h2ClassName = { color="red" }

  render() {
    console.log('render App');
    console.log(this.state.count);
    return (
      <>

        <count value={0} />
        <div className="d-flex justify-content-center">
          <Compter count={this.state.count} increment={() => { this.setState({ count: this.state.count + 1 }) }} substract={() => {
            if (this.state.count < 1) {
              return 
            }
            this.setState({ count: this.state.count - 1 })
            }} />
          <h1>Counter</h1>
          <Compter count={this.state.count} increment={() => { this.setState({ count: this.state.count + 1 }) }} substract={() => {
            if (this.state.count < 1) {
              return
            }
            this.setState({ count: this.state.count - 1 })}} />
          {/* <h2>{this.state.count}</h2> */}
          {/* <button onClick={() =>{
            this.setState({count:this.state.count - 1})
          }}>-
          </button>
          <button onClick={() =>{
            this.setState({count:this.state.count + 1})
          }}>+
          </button> */}
        </div>



      </>
    )
  }

}

export default App;