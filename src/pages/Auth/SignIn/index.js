import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '../../../store/ducks/auth';

// import { Container } from './styles';

class SignIn extends Component {

  static propTypes = {
    signInRequest: PropTypes.func.isRequired,
  };

  state = {
    username: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    const { signInRequest } = this.props;

    signInRequest(username, password);
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { username, password } = this.state;

    return (
      <>
        <h1>.</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" value={username} onChange={this.handleInputChange} />
          <input type="password" name="password" value={password} onChange={this.handleInputChange} />
          <button type="submit">entrar</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(SignIn);
