import React from 'react'
import { transactions } from '../Index'
import TransactionTable from '../Components/TransactionTable'

const Transactions = () => {
  return (
    <div className='sm:ml-64 pt-15 p-5 pb-24 sm:pb-0 overflow-x-hidden'>
      <div className='w-full h-px my-4 bg-[#d4d4d4]'></div>
      <h1 className='px-2 text-2xl '>Transaction</h1>
      <div className='w-full h-px my-4 bg-[#d4d4d4]'></div>

      <div className='cursor-default'>
        <div className='flex'>
          <p className='border-y border-slate-300 px-2 border-x h-10 w-16 flex items-center justify-center'>S.N</p>
          <p className='border-y border-slate-300 border-r px-2 h-10 flex items-center w-52'>Title</p>
          <p className='border-y border-slate-300 border-r px-2 h-10 hidden lg:flex items-center w-32'>Category</p>
          {/* <p className='border-y border-slate-300 border-r px-2 h-10 hidden lg:flex items-center w-28'>Type</p> */}
          <p className='border-y border-slate-300 border-r px-2 h-10 flex items-center w-32'>Amount</p>
          <p className='border-y border-slate-300 border-r px-2 h-10 hidden lg:flex items-center w-36'>Date</p>
        </div>
        <div>
          {transactions.map((detail, index) => (
            <TransactionTable key={index} detail={detail} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Transactions