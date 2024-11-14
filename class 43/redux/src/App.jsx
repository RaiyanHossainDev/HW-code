import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './Slice/counterSlice'

function App() {
  const number = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()

  let handleAdd = ()=>{
    dispatch(increment())
  }
  
  let handleRemove = () => {
    dispatch(decrement())
  }
  


  return (
    <>
      <h1>{number}</h1>
      <div className='flex gap-5'>
        <button onClick={handleAdd} className='text-2xl bg-green-500 transition-all duration-[.2s] hover:text-[30px] text-white py-[5px] px-[15px] rounded-xl'>Add</button>
        <button onClick={handleRemove} className='text-2xl bg-red-500 transition-all duration-[.2s] hover:text-[30px] text-white py-[5px] px-[15px] rounded-xl'>Remove</button>
      </div>
    </>
  )
}

export default App
