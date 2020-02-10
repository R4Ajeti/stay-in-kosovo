import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, setSearchType, requestHostels } from '../actions';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = state => {
  return {
    searchField: state.searchHostels.searchField,
    searchType: state.searchHostels.searchType,
    hostels: state.requestHostels.hostels,
    isPending: state.requestHostels.isPending,
  };
};

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onSearchChangeType: event => dispatch(setSearchType(event.target.value)),
    onRequestHostels: () => dispatch(requestHostels()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestHostels();
  }

  render() {
    const {
      hostels,
      searchField,
      onSearchChange,
      searchType,
      onSearchChangeType,
      isPending,
    } = this.props;

    let filteredHostels = hostels.filter(hostel => {
      return hostel.company.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });

    if (Number.isInteger(parseInt(searchField))) {
      if (searchType) {
        if ('children'.includes(searchType.toLowerCase())) {
          filteredHostels = hostels.filter(hostel => {
            return parseFloat(hostel.childrenMax) >= parseFloat(searchField);
          });
        } else if ('adult'.includes(searchType.toLowerCase())) {
          filteredHostels = hostels.filter(hostel => {
            return parseFloat(hostel.adultMax) >= parseFloat(searchField);
          });
        }
      }
    } else {
      filteredHostels = hostels.filter(hostel => {
        return hostel.company.name
          .toLowerCase()
          .includes(searchField.toLowerCase());
      });
    }
    return (
      <div className="tc">
        <h1 className="f1">Hostel Finder</h1>
        <SearchBox searchChange={onSearchChange} placeholder="Search by" />
        <SearchBox searchChange={onSearchChangeType} placeholder="TYPE" />
        <Scroll>
          {isPending ? (
            <h1>Loading</h1>
          ) : (
            <ErrorBoundry>
              <CardList hostels={filteredHostels} />
            </ErrorBoundry>
          )}
        </Scroll>
      </div>
    );
  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);
