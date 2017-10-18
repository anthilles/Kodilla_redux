// import
import uuid from uuid;

// zmienne do wykorzystania później
const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

// dodawanie
function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

// edycja
function editComment(text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: uuid.v4()
    }
}

// usuwanie
function deleteComment(id) {
    return {
        type: DELETE_COMMENT,
        id: uuid.v4()
    }
}

// like
function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id: uuid.v4()
    }
}

// !like
function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: uuid.v4()
    }
}
