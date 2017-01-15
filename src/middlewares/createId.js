export default store => next => action => {
    if (action.type === 'ADD_COMMENT') {
        action.payload.comment.id = Date.now();
    }
    next(action)
}