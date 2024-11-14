import React from 'react'

const CommonButton = ({num , bg , func}) => {


  return (
    <button onClick={()=>func} className={`
        text-2xl ${bg} transition-all duration-[.2s] hover:text-[30px] text-white py-[5px] px-[15px] rounded-xl
    `}>
        {num}
    </button>
  )
}

export default CommonButton