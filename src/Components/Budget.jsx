import React from 'react'

const Budget = ({budget}) => {
  return (
    <div className='border border-slate-300 rounded-xl px-4 py-2 w-[150px] h-[100px]'>
        <h1 className='text-2xl'>{budget.category}</h1>
        <h1 className='font-light px-2'>Rs. {budget.limit}</h1>
        <h1 className='font-light px-2'>Rs. {budget.spent}</h1>
    </div>
  )
}

export default Budget