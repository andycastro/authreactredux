import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import AuthActions from '../ducks/auth';

export function* signIn({ username, password }) {
  try {
    const response = yield call(api.post, 'login', { username, password });

    localStorage.setItem('@Save:token', response.data.token);

    console.log("OK ate aqui");

    yield put(AuthActions.signInSuccess(response.data.token));
  } catch (err) {
    console.log(err);
  }
}
