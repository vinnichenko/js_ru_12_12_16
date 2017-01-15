import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'
import { arrayToMap } from '../helpers'
import { Record } from 'immutable'

const CommentModel = Record({
    "id": null,
    "user": null,
    "text": null
})

const defaultState = arrayToMap(normalizedComments, CommentModel)

export default (commentsState = defaultState, action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_COMMENT:
            console.log('adding a comment');
            return commentsState.set(payload.comment);
    }

    return commentsState
}