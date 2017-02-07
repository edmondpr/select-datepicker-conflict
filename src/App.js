import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import 'react-datepicker/dist/react-datepicker.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      startDate: moment()
    };
  }

  render() {
    return (
      <div>
        <Select />
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
}

export default App;
