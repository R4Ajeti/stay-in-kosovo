import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { setSearchField, setSearchType, requestHostels } from '../actions';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css';

// Speed up calls to hasOwnProperty
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isEmpty(obj) {
  // null and undefined are "empty"
  if (obj == null) return true;

  // Assume if it has a length property with a non-zero value
  // that that property is correct.
  if (obj.length > 0) return false;
  if (obj.length === 0) return true;

  // If it isn't an object at this point
  // it is empty, but it can't be anything *but* empty
  // Is it empty?  Depends on your application.
  if (typeof obj !== 'object') return true;

  // Otherwise, does it have any properties of its own?
  // Note that this doesn't handle
  // toString and valueOf enumeration bugs in IE < 9
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key)) return false;
  }

  return true;
}

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

    const query = queryString.parse(this.props.location.search);
    let filteredHostels = hostels.filter(hostel => {
      return hostel.address.city
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

    if (!isEmpty(query)) {
      if (query.name) {
        filteredHostels = filteredHostels.filter(hostel => {
          return hostel.address.city
            .toLowerCase()
            .includes(query.name.toLowerCase());
        });
      }
      if (query.childs) {
        filteredHostels = filteredHostels.filter(hostel => {
          return parseFloat(hostel.childrenMax) >= parseFloat(query.childs);
        });
      }
      if (query.adults) {
        filteredHostels = filteredHostels.filter(hostel => {
          return parseFloat(hostel.adultMax) >= parseFloat(query.adults);
        });
      }
    }

    return (
      <div className="tc">
        <h1 className="f1">Hostel Finder</h1>
        {isEmpty(query) ? (
          <div>
            <SearchBox searchChange={onSearchChange} placeholder="Search by" />
            <SearchBox searchChange={onSearchChangeType} placeholder="TYPE" />
          </div>
        ) : null}
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
