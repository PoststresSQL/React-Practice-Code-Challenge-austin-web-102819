import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Modal from './components/Modal';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  // Set initial state of sushi to be an empty array
  constructor() {
    super();
    this.state = {
      allSushi: [],
      budget: 200,
      tableSushi: [],
    };
  }

  addToTableSushi = (eatenSushi) => {
    // set a variable to hold the new value of tableSushi because state can't be pushed on
    const newTableSushi = this.state.tableSushi
    // push the  eatenSushi into the newTableSushi variable
    newTableSushi.push(eatenSushi)
    // spread the previous state so older keys aren't deleted
    // set the updated key `tableSushi` to the newTableSushi value
    this.setState({
      ...this.state,
      tableSushi: newTableSushi
    })
  }

  // create a fetch request to the sushi API
  componentDidMount() {
    // this lifecycle method gets run after the render()
    fetch(API)
      .then(response => response.json())
      .then((data) => this.setState({ allSushi: data }));
  }

  render() {
    const {
      allSushi,
      budget,
      tableSushi
    } = this.state

    return (
      <div className="app">
        <SushiContainer
          addToTableSushi={this.addToTableSushi}
          budget={budget}
          sushiArr={allSushi}
          tableSushi={tableSushi}
        />
        <Table
          budget={budget}
          tableSushi={tableSushi}
        />
        <Modal id={'modal__container'} className={'modal'} />
      </div>
    );
  }
}

export default App;