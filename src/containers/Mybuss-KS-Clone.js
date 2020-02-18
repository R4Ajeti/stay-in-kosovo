import React, { Component } from 'react';
import SizeMe, { withSize } from 'react-sizeme';
import ReactResizeDetector, { withResizeDetector } from 'react-resize-detector';

import './Mybuss-KS-Clone.css';
//import Section from './Section';
import MyComponent from './MyComponent';
import Section from '../components/Section';

class HomePage extends Component {
  render() {
    // A size prop is passed into your component by my library.
    return (
      <div className="test12">
        <Section />
        {/*<ReactResizeDetector
          handleWidth
          handleHeight
          onResize={this.onResize}
        />*/}
      </div>
    );
  }
  onResize = () => {
    this.render();
  };
}

export default HomePage;
