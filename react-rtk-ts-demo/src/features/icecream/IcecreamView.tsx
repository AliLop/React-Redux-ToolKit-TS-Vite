import React from 'react'
import  { ordered, restocked } from './icecreamSlice'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { RootState } from '../../app/store'


export const IcecreamView = () => {
    const [value, setValue] = React.useState(1)
    const numOfIcecreams = useAppSelector((state) => state.icecream.numOfIcecreams)
    const dispatch = useAppDispatch()
  
    return (
    <div>
        <h2>Number of ice creams - {numOfIcecreams}</h2>
        <button onClick={() => dispatch(ordered())}>Order ice cream</button>
        <input type= 'number' value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
        <button  onClick={() => dispatch(restocked(value))}>Restock ice cream</button>
    </div>
  )
}
