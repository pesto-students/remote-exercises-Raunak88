import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor() {
    super();

    this.state = {
      isPurchased: [],
      newItem: "",
      groceries: {
        soap: 1,
        oil: 1,
        detergent: 1,
        sauce: 1,
      },
    };
  }

  addItem = () => {
    if (this.state.newItem === "") {
      return;
    }
    let updatedGroceries = this.state.groceries;
    let updatedItem = this.state.newItem;
    updatedGroceries[updatedItem] = ++updatedGroceries[updatedItem] || 1;
    this.setState({ groceries: updatedGroceries });
    this.setState({ newItem: "" });
  };

  handleOnChange = (event) => {
    this.setState({ newItem: event.target.value });
  };

  emptyGroceryList = () => {
    this.setState({ groceries: {} });
  };
  purchased = (i) => {
    let itemPurchased = this.state.isPurchased;
    if (itemPurchased.includes(i)) {
      itemPurchased = itemPurchased.filter((x) => x !== i);
      this.setState({ isPurchased: itemPurchased });
    } else {
      itemPurchased.push(i);
      this.setState({ isPurchased: itemPurchased });
    }
  };

  render() {
    const list = Object.entries(this.state.groceries);

    return (
      <div className="App">
        <header className="App-header">
          <h1>Grocery List</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="main">
              <ul className="item-list">
                {list
                  ? list.map((item, index) => {
                      return (
                        <li
                          className={
                            this.state.isPurchased.includes(index)
                              ? " item-list--each red"
                              : "item-list--each"
                          }
                          onClick={this.purchased.bind(this, index)}
                          key={index}
                        >
                          {item}
                        </li>
                      );
                    })
                  : ""}
              </ul>
              <input
                type="text"
                value={this.state.newItem}
                name="newItem"
                placeholder="Add Item"
                onChange={this.handleOnChange}
              ></input>
              <div>
                <button onClick={this.addItem}>Add</button>
              </div>
              <div>
                <button onClick={this.emptyGroceryList}>Clear</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
