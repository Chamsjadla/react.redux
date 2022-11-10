import {INCREMENT,DECREMENT} from "../constants/counterConst"

export const increment=(step)=>{
    return {type:INCREMENT,payload:step}
}

export const decrement=(step)=>{
    return {type:DECREMENT,payload:step}
}