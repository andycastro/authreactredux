import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import AuthActions from '../ducks/auth';

export function* signIn({ username, password }) {
  try {
    const response = yield call(api.post, 'login', { username, password });

    localStorage.setItem('@Save:token', response.data.token);

    yield put(toastrActions.add({
      type: 'success',
      title: 'Tudo Certo!',
      message: 'Entrando...'
    }))

    yield put(AuthActions.signInSuccess(response.data.token));
    yield put(push('/'));
  } catch (err) {
    yield put(toastrActions.add({
      type: 'error',
      title: 'Falha no Login',
      message: 'Verifique seu e-mail ou senha',
    }))
  }
}
