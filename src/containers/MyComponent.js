import React, { Component } from 'react';
import sizeMe, { SizeMe } from 'react-sizeme';

import svgI from '../img/hotel.svg';
import svgII from '../img/chef-hat.svg';
import svgIII from '../img/hotel-building.svg';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    const { width, height } = this.props.size;
    console.log('Heldas');
    console.log(width);
    this.state = { width: width };
  }
  render() {
    const { width, height } = this.props.size;
    console.log('hello2');
    console.log(width);
    return (
      <SizeMe
        monitorWidth
        refreshRate={1024}
        render={({ size }) => (
          <section width="width" style={{ border: '3px solid red' }}>
            <div>
              My size is {(console.log(size.width), size.width || -1)}px x{' '}
              {size.height || -1}
              px
            </div>
          </section>
        )}
      />
    );
  }
}

export default sizeMe({ monitorHeight: true })(MyComponent);
