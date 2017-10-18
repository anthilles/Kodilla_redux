// import z actions
import {ADD_COMMENT} from './actions'
import {EDIT_COMMENT} from './actions'
import {DELETE_COMMENT} from './actions'
import {THUMB_UP_COMMENT} from './actions'
import {THUMB_DOWN_COMMENT} from './actions'

// reducer dla komentarzy
function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
            , ...state.comments
        ];
        case EDIT_COMMENT:
            return [{
                id: action.id,
                text: action.text
            }
            , ...state.comments
            ];

        case DELETE_COMMENT:
            return [{
                comments: state.comments.filter(comment =>
                    comment.id !== action.id)
            }]

        case THUMB_UP_COMMENT:
            return [{
                //todo
            }]

        case THUMB_DOWN_COMMENT:
            return [{
                //todo
            }]
    }
}

export default comments;