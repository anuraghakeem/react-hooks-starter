import { takeEvery, put, all } from 'redux-saga/effects'
import { getUser } from '../actions/index'

const id = getUser.id;

 function* fetchData(){
    const response =  yield fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
    yield put({ type: 'FETCH_POSTS_DATA', payload: response })
};

function* fetchUserData(){
    const response =  yield fetch('https://jsonplaceholder.typicode.com/users/').then(res => res.json());
    console.log(response)
    yield put({ type: 'FETCH_USER_DATA', payload: response })
};

function* fetchPosts() {
    yield takeEvery('FETCH_POSTS', fetchData);
    yield takeEvery('FETCH_USER', fetchUserData,);
}


export default function* rootSaga() {
    yield all([fetchPosts()])
}