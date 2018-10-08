import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import NavBar from './components/NavBar';
import EmployeeForm from './components/EmployeeForm';
import Uploader from './components/Uploader';
import Payslip from './components/Payslip';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <EmployeeForm />
        <Uploader />
        <Payslip payslips={this.props.payslips} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  payslips: state.payslip.payslips
});

export default connect(mapStateToProps)(App);
