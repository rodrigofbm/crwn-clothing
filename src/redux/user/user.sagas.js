import { all, call, takeLatest, put } from "redux-saga/effects";

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  createUserEmailSuccess,
  createUserEmailFailure
} from "./user.actions";
import { UserActionTypes } from "./user.types";
import {
  auth,
  SignInWithGoogle,
  createProfileDocument,
  checkUserLoggedIn
} from "../../firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, aditionalData) {
  try {
    const userRef = yield call(createProfileDocument, userAuth, aditionalData);
    const snapshot = yield userRef.get();

    yield put(
      signInSuccess({
        id: snapshot.id,
        ...snapshot.data()
      })
    );
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield SignInWithGoogle();

    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);

    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield checkUserLoggedIn();

    if (!userAuth) return;

    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();

    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* createUser({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);

    yield getSnapshotFromUserAuth(user, { displayName });
    yield put(createUserEmailSuccess());
  } catch (error) {
    yield put(createUserEmailFailure(error));
  }
}

/** ===== SAGAS =====*/

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onCreateUserWithEmail() {
  yield takeLatest(UserActionTypes.CREATE_USER_EMAIL_START, createUser);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onCreateUserWithEmail)
  ]);
}
