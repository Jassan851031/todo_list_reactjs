import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  };

  event(e) {
    if (e.keyCode === 13 && e.target.value !== '') {
      this.setState({
        list: this.state.list.concat(e.target.value)
      });
      e.target.value = "";
    }
  }
  trash(y) {
    const { list } = this.state;
    list.splice(y, 1);
    this.setState({
      list: list
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className= "text-center" >TO DO LIST</h1>
            <input type="text" className="form-control" placeholder="Add to do here" onKeyDown={e => this.event(e)} />
            <br />
            <ul className="list-group">
              {
                this.state.list.length > 0 &&
                this.state.list.map((list, i) => {
                  return (
                    <li key={i} className="list-group-item d-flex justify-content-between">
                      {list}
                      <i className="fa fa-trash" onClick={y => this.trash(i)}></i>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
