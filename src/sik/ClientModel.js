import React, { Component } from 'react';

class ClientModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: 'Rinor',
      lname: 'Ajeti',
      sex: 'M',
      height: 180,
      weight: 70
    };
    // This binding is necessary to make `this` work in the callback
  }

  render() {
    return <div className="Client">{this.state.fname} THis is a client</div>;
  }
}

export default ClientModel;
