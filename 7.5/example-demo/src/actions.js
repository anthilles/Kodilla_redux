// import
import uuid from 'uuid';



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
function thumbUpComment(commentId) {
    return {
      type: THUMB_UP_COMMENT,
      id: commentId
    }
  }

// !like
function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: uuid.v4()
    }
}

export {
    addComment,
    editComment,
    deleteComment,
    thumbUpComment,
    thumbDownComment
}

// zmienne do wykorzystania później
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
