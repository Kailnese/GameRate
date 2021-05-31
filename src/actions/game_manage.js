import {ActionTypes} from './actionType'

export const like = (id, comment = "", item = {}) => {
    return {
        type: ActionTypes.LIKE,
        payload: {
            id,
            comment,
            item
        }
    }
}

export const dislike = (id, comment = "", item = {}) => {
    return {
        type: ActionTypes.DISLIKE,
        payload: {
            id,
            comment,
            item
        }
    }
}

export const addComment = (id, comment = "", item = {}) => {
    return {
        type: ActionTypes.ADD_COMMENT,
        payload: {
            id,
            comment,
            item
        }
    }
}

export const removeComment = (id, comment = "", item = {}) => {
    return {
        type: ActionTypes.REMOVE_COMMENT,
        payload: {
            id,
            comment,
            item
        }
    }
}

export const addNewGame = (id, comment = "", item = {}) => {
    return {
        type: ActionTypes.ADD_GAME,
        payload: {
            id,
            comment,
            item
        }
    }
}