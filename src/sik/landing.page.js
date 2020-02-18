import React from 'react';
import auth from './auth';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', pass: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    if (e.target.name === 'username') {
      this.setState({ username: e.target.value });
    } else {
      this.setState({ pass: e.target.value });
    }
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <h1>Landing Page</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
            Password:
            <input
              name="password"
              type="password"
              value={this.state.pass}
              onChange={this.handleChange}
            />
          </label>
          <input
            type="submit"
            username={this.state.username}
            pass={this.state.pass}
            onClick={() => {
              auth.login(() => {
                console.log(this.props);
                if (true) {
                  this.props.history.push('/app');
                  return true;
                } else {
                  this.props.history.push('/');
                  return false;
                }
              });
            }}
          />
        </form>
      </div>
    );
  }
}
export default LandingPage;
