// action creator  return ==> action !!!
import { ADD_INITIAL, DECREMENT, INCREMENT, RESET } from "../constants/actionTypes"

export const increment=(step)=>{
    return {type:INCREMENT,payload:step}
}

export const decrement=(step)=>{
    return {type:DECREMENT,payload:step}
}

export const reset=()=>{
    return {type:RESET}
}

export const addInitial=(initial)=>{
    return {type:ADD_INITIAL,payload:initial}
}

