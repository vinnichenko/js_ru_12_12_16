import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'
import { arrayToMap } from '../helpers'
import { Record } from 'immutable'

const ArticleModel = Record({
    "id": null,
    "date": null,
    "title": null,
    "text": null,
    "comments": []
})

const defaultState = arrayToMap(normalizedArticles, ArticleModel)

export default (articlesState = defaultState, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.delete(payload.id)
        case ADD_COMMENT:
            //shit begins
            console.log(payload.comment.id);
            console.log(payload.articleId);

            // var articleId = payload.articleId;
            console.log(articlesState.get(payload.articleId))
            let oldComments = articlesState.get(payload.articleId).comments
            let newComments = oldComments.join(payload.comment.id)
            articlesState.get(payload.articleId).set('comments', newComments)
            // articlesState = articlesState.get(payload.articleId).setIn(['comments'], payload.comment.id)
            return articlesState
    }

    return articlesState
}