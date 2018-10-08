import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { generateOne } from '../actions';
import { isEmpty } from '../util';

export class EmployeeForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    salary: 0,
    superrate: 0,
    payPeriod: 'January'
  };

  PAY_PERIOD = [
    { label: 'January', value: 'January' },
    { label: 'February', value: 'February' },
    { label: 'March', value: 'March' },
    { label: 'April', value: 'April' },
    { label: 'May', value: 'May' },
    { label: 'June', value: 'June' },
    { label: 'July', value: 'July' },
    { label: 'August', value: 'August' },
    { label: 'September', value: 'September' },
    { label: 'October', value: 'October' },
    { label: 'November', value: 'November' },
    { label: 'December', value: 'December' }
  ];

  selectOptions = this.PAY_PERIOD.map((option, index) => (
    <option key={index} value={option.value}>
      {option.label}
    </option>
  ));

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { firstname, lastname, salary, superrate, payPeriod } = this.state;
    if (!isEmpty(firstname) && !isEmpty(lastname) && !isEmpty(payPeriod)) {
      const employee = {
        firstName: firstname,
        lastName: lastname,
        annualSalary: parseInt(salary),
        superRate: parseInt(superrate),
        paymentPeriod: payPeriod
      };
      this.props.generateOne(employee);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h3 className="text-center mt-2">Enter details here:</h3>
            <small className="d-block pb-3 text-center">
              Please provide valid input.
            </small>
            <form onSubmit={this.onSubmit} id="employeeForm">
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label>First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    value={this.state.firstname}
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label>Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label>Annual Salary</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">$</span>
                    </div>
                    <input
                      type="number"
                      className="form-control"
                      id="salary"
                      name="salary"
                      value={this.state.salary}
                      onChange={this.onChange}
                      placeholder="positive integer"
                    />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label>Super rate</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">%</span>
                    </div>
                    <input
                      type="number"
                      className="form-control"
                      id="superrate"
                      name="superrate"
                      value={this.state.superrate}
                      onChange={this.onChange}
                      placeholder="0% - 50% inclusive"
                    />
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label>Pay Period</label>
                  <select
                    className="form-control"
                    name="payPeriod"
                    id="payPeriod"
                    value={this.state.payPeriod}
                    onChange={this.onChange}
                  >
                    {this.selectOptions}
                  </select>
                </div>
                <div className="col-md-4 mb-3">
                  <label>Then</label>
                  <button className="form-control btn btn-outline-success">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

EmployeeForm.propTypes = {
  generateOne: PropTypes.func.isRequired
};

export default connect(
  null,
  { generateOne }
)(EmployeeForm);
