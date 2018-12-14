import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as DeveloperActions } from '../ducks/developers';

export function* addDeveloper(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user.repositoryInput}`);

    const isDuplicated = yield select(state => state.developers.data.find(favorite => favorite.login === data.login));

    if (isDuplicated) {
      yield put(DeveloperActions.addDeveloperFailure('Repositório duplicado'));
    } else {
      const repositoryData = {
        login: data.login,
        name: data.name,
        avatar_url: data.avatar_url,
        longitude: action.payload.user.longitude,
        latitude: action.payload.user.latitude,
      };

      yield put(DeveloperActions.addDeveloperSuccess(repositoryData));
    }
  } catch (err) {
    yield put(DeveloperActions.addDeveloperFailure('Erro ao adicionar o repositório'));
  }
}

export function* removeDeveloper(action) {
  try {
    yield put(DeveloperActions.removeDeveloperSuccess(action.payload.developer));
  } catch (error) {
    yield put(DeveloperActions.removeDeveloperFailure('Erro ao remover usuário'));
  }
}
