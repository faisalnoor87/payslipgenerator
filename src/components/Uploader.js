import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { generateFile } from '../actions';
import { isEmpty } from '../util';

export class Uploader extends Component {
  state = {
    files: []
  };

  onChange = e => {
    this.setState({ files: e.target.files });
  };

  onSubmit = e => {
    e.preventDefault();
    if (!isEmpty(this.state.files)) {
      const formData = new FormData();
      formData.append('file', this.state.files[0]);
      this.props.generateFile(formData);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h3 className="text-center mt-2">Or upload a file:</h3>
            <small className="d-block pb-3 text-center">
              Data format for each data entry line: first name,last name,annual
              salary,super rate,payment period
            </small>
            <form
              className="form-group"
              onSubmit={this.onSubmit}
              id="uploadForm"
            >
              <input id="fileInput" type="file" onChange={this.onChange} />
              <input
                type="submit"
                value="Upload"
                className="btn btn-outline-success"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Uploader.propTypes = {
  generateFile: PropTypes.func.isRequired
};

export default connect(
  null,
  { generateFile }
)(Uploader);
