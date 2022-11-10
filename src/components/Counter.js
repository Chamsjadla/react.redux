import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../js/actions/counterActions'

const Counter = () => {
const [stepUp, setStepUp] = useState(1)
const [stepDown, setStepDown] = useState(1)
const dispatch=useDispatch()
const counter=useSelector(state=>state.counter)
    return (
        <div>
            <button onClick={()=>dispatch(increment(+stepUp))}>+ </button>
            <input type="number" onChange={(e)=>setStepUp(e.target.value)}/>
            <p>{counter}</p>
            <button onClick={()=>dispatch(decrement(+stepDown))}>- </button>
            <input type="number" onChange={(e)=>setStepDown(e.target.value)} />
        </div>
    )
}

export default Counter