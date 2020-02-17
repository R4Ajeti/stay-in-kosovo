import React, { Component } from 'react';
import { SizeMe, withSize } from 'react-sizeme';
import { Redirect } from 'react-router-dom';

import svgI from '../img/hotel.svg';
import svgII from '../img/chef-hat.svg';
import svgIII from '../img/hotel-building.svg';

class Section extends Component {
  state = {
    name: '',
    childs: '',
    adults: '',
    redirect: false,
  };
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    const path = `/Search?${
      this.state.name !== '' ? 'name=' + this.state.name : ''
    }${this.state.childs !== '' ? '&childs=' + this.state.childs : ''}${
      this.state.adults !== '' ? '&adults=' + this.state.adults : ''
    }`;
    if (this.state.redirect) {
      return <Redirect to={path} />;
    }
  };
  onTodoChange = e => {
    const type = e.target.id;
    const val = e.target.value;
    console.log(type);
    if (type === 'name') {
      this.setState({
        name: val,
      });
    } else if (type === 'childs') {
      this.setState({
        childs: val,
      });
    } else if (type === 'adults') {
      this.setState({
        adults: val,
      });
    }
  };
  render() {
    // A size prop is passed into your component by my library.
    return (
      <section>
        <div className="searchOverlay">
          <div className="searchContainer">
            <div className="searchInnerContainer">
              <p className="text-uppercase">Filteri juaj sherbyes është këtu</p>
              <div className="searchBar">
                <form>
                  <div className="searchList">
                    <ul id="horizontal-list">
                      <li>
                        <span>
                          <button className="buttonStyleI">
                            <div>
                              <img
                                className="svgClass"
                                src={svgI}
                                alt="triangle with all three sides equal"
                              />
                            </div>
                          </button>
                        </span>
                      </li>
                      <li>
                        <span>
                          <button className="buttonStyleI">
                            <div>
                              <img
                                className="svgClass"
                                src={svgII}
                                alt="triangle with all three sides equal"
                              />
                            </div>
                          </button>
                        </span>
                      </li>
                      <li>
                        <span>
                          <button className="buttonStyleI">
                            <div>
                              <img
                                className="svgClass"
                                src={svgIII}
                                alt="triangle with all three sides equal"
                              />
                            </div>
                          </button>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="searchListHelp">
                    <div className="searchElem">
                      <label className="labelElem atomElem">Name</label>
                      <br></br>
                      <input
                        id="name"
                        className="atomElem"
                        value={this.state.name}
                        onChange={this.onTodoChange}
                      />
                    </div>
                    <div className="searchElem">
                      <label className="labelElem atomElem">Adult</label>
                      <br></br>
                      <input
                        id="adults"
                        className="atomElem"
                        value={this.state.adults}
                        onChange={this.onTodoChange}
                      />
                    </div>
                    <div className="searchElem">
                      <label className="labelElem atomElem">Femije</label>
                      <br></br>
                      <input
                        id="childs"
                        className="atomElem"
                        value={this.state.childs}
                        onChange={this.onTodoChange}
                      />
                    </div>
                  </div>
                  <div className="searchQuery">searchQuery</div>
                  <div className="searchAdvancedOption">
                    searchAdvancedOption
                  </div>
                  <div>
                    {this.renderRedirect()}
                    <button onClick={this.setRedirect}>Fillo Kerkimin</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Section;
