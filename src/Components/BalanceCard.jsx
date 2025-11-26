import React, { useState } from 'react'

const BalanceCard = ({ title, amount, subText }) => {
    const [hidden, setHidden] = useState(true);

    return (
        <div className='flex items-center justify-between p-4 shadow-sm rounded-xl border-[#E7E6E9] border min-w-[230px] min-h-[120px] bg-[#EEEEEE]'>
            <div className='flex flex-col'>
                <h1 className='text-sm font-light'>{title}</h1>
                <h1 className='text-2xl font-semibold text-[#222222]  select-none'>Rs. {hidden ? "XXX.XX" : `${amount}`}</h1>
                <h1 className='flex items-center text-xs font-extralight pt-4'>{subText}  this month</h1>
            </div>
            <div className='flex'>
                <button className='text-2xl pb-4 cursor-pointer' onClick={() => setHidden(!hidden)}>
                    {hidden ? <i class="ri-eye-off-line"></i> : <i class="ri-eye-line"></i>}
                </button>
            </div>
        </div>
    )
}

export default BalanceCard