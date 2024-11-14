import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Slice/counterSlice'

function App() {
  const sliceData = useSelector((state)=> state.counter.value)
  const dispatch  = useDispatch()


  return (
    <>
      <h1 className='text-7xl text-white mb-5'>
        {sliceData}
      </h1>
      <div className='flex gap-7'>
            <button onClick={()=>dispatch(increment())} className='
              text-2xl px-[20px] py-[5px] text-white
            bg-green-500 rounded-xl hover:scale-110 transition-all
            '>
              Add
            </button>
            <button onClick={(e)=>dispatch(decrement())} className='
              text-2xl px-[20px] py-[5px] text-white
            bg-red-500 rounded-xl hover:scale-110 transition-all
            '>
              Delete
            </button>
      </div>
    </>
  )
}

export default App
