import { ADD_CARD, DELETE_CARD, EDIT_CARD, SET_DATA, SET_PHOTO } from "./actionType"




let initiaState={
    photo:[]
}
let initState={
    newdata:[]
}

export const reducerdata=(state=initiaState,{type,payload})=>{
switch (type) {
    case SET_PHOTO:
        return{
            ...state,photo:payload
        }
        case DELETE_CARD:
            return{
                ...state,photo:state.photo.filter(el=>el.name!==payload)
            }
            case EDIT_CARD:
                return{
                    ...state,photo:state.photo.map((el)=>el.name===payload.name?({...el,...payload}):el)
                }
       case ADD_CARD:
           return{
               ...state,photo:[...state.photo,payload]
           }

    default:
        return state
}
}

export const reducernewdata=(state=initState,{type,palyoad})=>{
switch (type) {
    case SET_DATA:
        return{
            ...state,newdata:palyoad
        }
       

    default:
        return state
}
}