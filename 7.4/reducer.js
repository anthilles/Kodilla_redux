// import
import { combineReducers } from 'redux';
import comments from './comments';
// import users from './users';

// początkowy stan aplikacji
// const initialState = {
//     comments: [],
//     users: []
// };

// zebranie
const app = combineReducers({
    comments,
    users
});

