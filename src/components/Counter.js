import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addInitial, decrement, increment, reset } from '../JS/actions/actions'

const Counter = () => {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const [stepInc, setStepInc] = useState(1)
    const [stepDec, setStepDec] = useState(1)
    const [initial, setInitial] = useState(0)
    const handleClick = () => {
        if (+stepInc) {
            dispatch(increment(+stepInc))
        }

        else {
            alert("noooo")
        }
    }
    return (
        <div><h1>Counter</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <input placeholder="step +" onChange={(e) => setStepInc(e.target.value)} /><button onClick={handleClick}>+</button>
                <p>{counter}</p><button onClick={() => counter && dispatch(decrement(stepDec))}>-</button>
                <input placeholder="step -" onChange={(e) => setStepDec(e.target.value)} />
            </div>
            <button onClick={() => dispatch(reset())}>reset</button>
            <input placeholder="intial value" onChange={(e)=>setInitial(e.target.value)} /><button onClick={() => dispatch(addInitial(+initial))}>add initial</button>
        </div >
    )
}

export default Counter