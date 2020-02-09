import React, { Component } from 'react';

class ClientModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'r4ajeti',
      pass: '123456',
      fname: 'Rinor',
      lname: 'Ajeti',
      sex: 'M',
      height: 180,
      weight: 70,
    };
    // This binding is necessary to make `this` work in the callback
  }

  render() {
    return (
      <div className="Client">
        <h1>
          {this.state.fname} {this.state.lname}
        </h1>
        <div className="ClientDescription">
          <h3>Gjinia:</h3> <p>Mashkull</p>
        </div>
        <div>
          <h3>Height: </h3> <p>{this.state.height}</p>
        </div>
        <div>
          <h3>Weight: </h3> <p>{this.state.weight}</p>
        </div>
      </div>
    );
  }
}

export default ClientModel;
