import React from 'react';
import Avatar from './img/avatar.jpg';

class EntityModel extends React.Component {
  constructor(props) {
    super(props);
    let entityObject1 = {};
    let entityObject2 = {};
    this.state = {
      name: 'Motel1',
      service_type: 'Fjetje',
      unit_status: { M2453: true, M2454: true, M2455: false },
      pass: '123456789',
      avatar: Avatar,
      loyalty: 4.9,
      partners: [entityObject1, entityObject2],
      location: { lon: -122.44, lat: 48.8 },
      status: true,
      passiveDate: null,
    };
    // This binding is necessary to make `this` work in the callback
  }

  render() {
    return (
      <div className="Entity">
        Moteli: <h1>{this.state.name}</h1>
        <div className="EntityDescription">
          <img src={this.state.avatar} />
          <div>Ofron: {this.state.service_type}</div>

          <div className="rooms">Room I: M2453, E lire</div>
          <div className="rooms">Room II: M2454', E lire</div>
          <div className="rooms">Room III: M2455, E zene</div>
        </div>
      </div>
    );
  }
}

export default EntityModel;
