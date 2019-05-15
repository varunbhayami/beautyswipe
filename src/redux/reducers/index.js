import {ADD_CARD, REJECTED_CARD, LIKED_CARD} from '../constants'

const dataState = {
    allCards: [],
    likedCards: [],
    rejectedCards: []
}

function rootReducer(state = dataState, action) {
    if(action.type === ADD_CARD){
        return Object.assign({}, dataState, {
            ...state,
            allCards: action.payload
        })
    }
    if(action.type === LIKED_CARD){
        return Object.assign({}, dataState, {
            ...state,
            likedCards: state.likedCards.concat(action.payload)
        })
    }
    if(action.type === REJECTED_CARD){
        return Object.assign({}, dataState, {
            ...state,
            rejectedCards: state.rejectedCards.concat(action.payload)
        })
    }
    return state
}
export default rootReducer