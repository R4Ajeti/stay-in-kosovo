import React from 'react';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.authenticated = false;
    this.clients = [
      {
        username: 'r4ajeti',
        pass: '123456',
        fname: 'Rinor',
        lname: 'Ajeti',
        sex: 'M',
        height: 180,
        weight: 70,
      },
    ];
    this.auth = { username: '', pass: '' };
  }

  login(cb) {
    this.auth = { username: this.props.username, pass: this.props.pass };
    if (
      this.auth.username === this.clients[0].username &&
      this.auth.pass === this.clients[0].pass
    ) {
      this.authenticated = cb();
    }
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
