import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';

import ShopActionsType from './shop.types';

//yield pause until .next()
//able to cancel
export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    //call is just a function which returns a plain Object.
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    // Put creates an Effect description that instructs the middleware to schedule the dispatching of an action to the store
    // similar to dispatch
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (err) {
    yield put(fetchCollectionsFailure(err.message));
  }
}

//takeEvery -creates a non blocking call (doesn't pause the javascript)
export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionsType.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
