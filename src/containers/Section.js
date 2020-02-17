import React, { Component } from 'react';
import { SizeMe, withSize } from 'react-sizeme';

import svgI from '../img/hotel.svg';
import svgII from '../img/chef-hat.svg';
import svgIII from '../img/hotel-building.svg';

class Section extends Component {
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
                      <input className="atomElem"></input>
                    </div>
                    <div className="searchElem">
                      <label className="labelElem atomElem">Adult</label>
                      <br></br>
                      <input className="atomElem"></input>
                    </div>
                    <div className="searchElem">
                      <label className="labelElem atomElem">Femije</label>
                      <br></br>
                      <input className="atomElem"></input>
                    </div>
                  </div>
                  <div className="searchQuery">searchQuery</div>
                  <div className="searchAdvancedOption">
                    searchAdvancedOption
                  </div>
                  <button>Fillo kerkimin</button>
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
