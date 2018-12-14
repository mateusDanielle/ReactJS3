import { all, takeLatest } from 'redux-saga/effects';
// takeEvery -> para todas as requisições

import { Types as DeveloperTypes } from '../ducks/developers';
import { addDeveloper, removeDeveloper } from './developers';

export default function* rootSaga() {
  yield all([
    takeLatest(DeveloperTypes.ADD_REQUEST, addDeveloper),
    takeLatest(DeveloperTypes.REMOVE_REQUEST, removeDeveloper),
  ]);
}
