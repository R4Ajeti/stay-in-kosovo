import React, { Component } from 'react';
import './main.css';

class HomePage extends Component {
  render() {
    return (
      /*<div>
        <div
          className="ba bw3 w-mw o-2 searchContainer"
          style={{
            background:
              'url(https://mybus-ks.com/assets/img/bg/people-2596150_1920.jpg) no-repeat center center fixed',
            backgroundSize: 'cover',
          }}
        >
          <div class="pa4 lh-copy">
            <a class="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black">
              ss55ss
            </a>
          </div>

          <div className="bg-black o-50 searchList">searchList</div>
          <div className="searchListHelp">searchListHelp</div>
          <div className="searchQuery">searchQuery</div>
          <div className="searchAdvancedOption">searchAdvancedOption</div>
        </div>
      </div>*/
      /*<header class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
        <nav class="f6 fw6 ttu tracked">
          <a class="link dim white dib mr3" href="#" title="Home">
            Home
          </a>
          <a class="link dim white dib mr3" href="#" title="About">
            About
          </a>
          <a class="link dim white dib mr3" href="#" title="Store">
            Store
          </a>
          <a class="link dim white dib" href="#" title="Contact">
            Contact
          </a>
        </nav>
      </header>*/
      <div className="resetStyle" style={{ maxWidth: '1000px' }}>
        <section id="intro" className="section-intro">
          <div className="overlay">
            <div className="container">
              <div className="main-text">
                <p className="text-uppercase" style={{ color: '#FFF' }}>
                  bileta juaj është këtu.
                </p>
                <div className="row search-bar">
                  <div className="advanced-search">
                    <form
                      action="routes.php"
                      method="GET"
                      id="routeform"
                      className="search-form"
                    >
                      <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="input-field">
                          <label for="from">
                            <br />
                            Nisja
                          </label>
                          <input
                            type="text"
                            name="trip_start_date"
                            id="trip_start_date"
                            className="form-control oneway"
                          />
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="input-field">
                          <br />
                          <label for="to">Destinacioni</label>
                          <select
                            name="destination"
                            id="state-list"
                            className=" show-tick form-control"
                            onchange="getCity(this.value);"
                            required=""
                          ></select>
                        </div>
                      </div>

                      <div
                        id="appendoneway"
                        style={{ float: 'left' }}
                        className="col-md-4 col-sm-12"
                      >
                        <div id="onewaydiv" className="col-md-12">
                          <div className="input-field">
                            <label for="from">
                              <br />
                              Data e nisjes
                            </label>
                            <input
                              type="text"
                              name="trip_start_date"
                              id="trip_start_date"
                              className="form-control oneway"
                            />
                          </div>
                        </div>
                      </div>

                      <div
                        id="appendtwoway"
                        style={{ display: 'none', float: 'left' }}
                        className="col-md-4 col-sm-12"
                      >
                        <div
                          className="col-md-12"
                          id="twowaysdiv"
                          style={{ display: 'none' }}
                        >
                          <div className="input-field">
                            <label for="from">
                              <br />
                              Data Nisjes / Data e Kthimit
                            </label>
                            <input
                              type="text"
                              name="daterange"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-4 col-xs-4">
                        <div className="input-field">
                          <br />
                          <label for="adult">Adult</label>
                          <select className="form-control" name="adults">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-4">
                        <div className="input-field">
                          <br />
                          <label for="adult">Femije</label>
                          <select className="form-control" name="children">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-4">
                        <input type="hidden" value="0" name="infants" />
                        <div className="input-field">
                          <br />
                          <label for="adult">Foshnje</label>
                          <select className="form-control" name="kalama">
                            <option value="0" selected="">
                              0
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <hr />

                        <div className="col-md-4 col-sm-6">
                          <input
                            type="checkbox"
                            name="twoways"
                            id=""
                            className="twoways"
                            value="0"
                            onchange="valueChanged()"
                          />
                          Vajtje - Ardhje
                        </div>

                        <div className="col-md-offset-6 col-md-2 col-sm-6 search-col">
                          <br />
                          <button className="btn btn-common btn-search btn-block">
                            <strong> KERKO </strong>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
