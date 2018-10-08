import React, { Component } from 'react';
import { isEmpty } from '../util';

export class Payslip extends Component {
  showPayslips = payslips => {
    const details = [];

    if (this.props.payslips) {
      details.push(
        <div id="result" key="header">
          <hr className="text-center mt-3" />
          <h3 className="text-center mt-2 mb-3">Result:</h3>
        </div>
      );
      this.props.payslips.forEach((payslip, index) => {
        details.push(
          <div key={index} className="card mb-5">
            <div className="card-header">
              <strong>Payslip</strong>
            </div>
            <div className="card-body">
              <h4 className="card-title">{payslip.name}</h4>
              <p className="card-text">
                Gross Income: ${payslip.grossIncome} <br />
                Income Tax: ${payslip.incomeTax} <br />
                Net Income: ${payslip.netIncome} <br />
                Super: ${payslip.superAmount}
              </p>
            </div>
            <div className="card-footer">Pay Period: {payslip.payPeriod}</div>
          </div>
        );
      });
    }

    return details;
  };

  render() {
    return (
      <div id="payslipContainer" className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            {!isEmpty(this.props.payslips) &&
              this.showPayslips(this.props.payslips)}
          </div>
        </div>
      </div>
    );
  }
}

export default Payslip;
