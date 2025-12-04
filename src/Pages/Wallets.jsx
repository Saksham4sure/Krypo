import React from 'react'
import CreditCard from '../Components/CreditCard'

const Wallets = () => {
  return (
    <div className='sm:ml-64 pt-15 p-5 overflow-x-hidden'>
      <div className='w-full h-px my-4 bg-[#d4d4d4]'></div>
      <h1 className='px-2 text-2xl '>Wallets</h1>
      <div className='w-full h-px my-4 bg-[#d4d4d4]'></div>
      <div className='flex gap-4 flex-wrap items-center justify-center'>
        <CreditCard bankName="KryPo." name="Saksham Shrestha" id="4728 8942 5433 9211" exp="7/29" img="/background.png" />
        <CreditCard bankName="MontraPrime" name="Saksham Shrestha" id="0087 1157 0587 6187" exp="7/29" img="/background3.jpg" />
      </div>
    </div>
  )
}

export default Wallets