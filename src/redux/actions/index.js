import {ADD_CARD, REJECTED_CARD, LIKED_CARD} from '../constants'
import axios from "axios";


export function addCardData(payload){
   return {type: ADD_CARD, payload}
}
export function likedCard(payload){
   return {type: LIKED_CARD, payload}
}
export function rejectedCard(payload){
   return {type: REJECTED_CARD, payload}
}

export function getCardsData(url) {
   return function (dispatch) {
      return (
          axios.get(url,{
             headers: {
                'Content-Type': 'application/json'
             }
          }).then( response => {
             dispatch(addCardData(response.data.hits))
          }).catch(err => {
              console.log(err)
          })
      )
   }
}