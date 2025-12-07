import React from 'react'
import CreditCard from '../Components/CreditCard'

const Wallets = () => {
  return (
    <div className='sm:ml-64 pt-15 pb-24 p-5 overflow-x-hidden'>
      <div className='w-full h-px my-4 bg-[#d4d4d4]'></div>
      <h1 className='px-2 text-2xl '>Wallets</h1>
      <div className='w-full h-px my-4 bg-[#d4d4d4]'></div>
      <h1 className='px-2 pb-2 text-[#7c7c7c] font-light'>Credit cards</h1>
      <div className='flex gap-4 flex-wrap items-center justify-center'>
        <CreditCard bankName="KryPo." icon="ri-visa-line" name="Saksham Shrestha" id="4728 8942 5433 9211" exp="07/29" img="black2.jpg" />
        <CreditCard bankName="MontraPrime" icon="ri-mastercard-fill" name="Saksham Shrestha" id="0087 1157 0587 6187" exp="06/01" img="pruple1.jpg" />
        <CreditCard bankName="CryptoFi" icon="ri-weibo-fill" name="Saksham Shrestha" id="5542 9902 1102 4382" exp="09/13" img="black1.jpg" />
      </div>
    </div>
  )
}

export default Wallets