import React, { Component } from "react";
import Transition from "react-transition-group/Transition";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showBlock = () => {
    this.setState((prevState) => ({ showBlock: !prevState.showBlock }));
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button onClick={this.showBlock}>toggle block</button>
        {
          <Transition
            in={this.state.showBlock}
            timeout={3000}
            mountOnEnter
            unmountOnExit
            onEnter={() => console.log("enter")}
            onEntering={() => console.log("entering")}
            onEntered={() => console.log("entered")}
            onExit={() => console.log("exit")}
            onExiting={() => console.log("exiting")}
            onExited={() => console.log("exited")}
          >
            {(state) => {
              return <p>{state}</p>;
            }}
          </Transition>
        }
        <br></br>
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        {this.state.modalIsOpen ? <Backdrop show /> : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
