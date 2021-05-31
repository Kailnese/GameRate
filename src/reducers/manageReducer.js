import {ActionTypes} from '../actions/actionType'

const manageReducer = (state = [], {type, payload}) => {
    switch(type){
        case ActionTypes.LIKE:
            return state.map(item => {
                if(item.id === payload.id){
                    if(item.likeClicked){
                        item.like -= 1;
                    }else{
                        item.like += 1;
                        if(item.dislikeClicked){
                            item.dislikeClicked = !item.dislikeClicked;
                            item.dislike -= 1;
                        }
                    }
                    item.likeClicked = !item.likeClicked;
                }
                return item;
            })
        case ActionTypes.DISLIKE:
            return state.map(item => {
                if(item.id === payload.id){
                    if(item.dislikeClicked){
                        item.dislike -= 1;
                    }else{
                        item.dislike += 1;
                        if(item.likeClicked){
                            item.likeClicked = !item.likeClicked;
                            item.like -= 1;
                        }
                    }
                    item.dislikeClicked = !item.dislikeClicked;
                }
                return item;
            })
        case ActionTypes.ADD_COMMENT:
            if(payload.comment === "") return state;
            return state.map(item => {
                if(item.id === payload.id){
                    item.comments.push(payload.comment);
                }
                return item;
            })
        case ActionTypes.REMOVE_COMMENT:
            return state.map(item => {
                if(item.id === payload.id){
                    item.comments.splice(item.comments.indexOf(payload.comment), 1);
                }
                return item;
            })
        case ActionTypes.ADD_GAME:
            payload.item["id"] = state[state.length-1].id + 1;
            return [...state, payload.item];
        default:
            return state;
    }
}
export default manageReducer;